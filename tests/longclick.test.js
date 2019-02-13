import { createLocalVue, shallowMount } from '@vue/test-utils'
import { longClickDirective } from '../src/index.js'


const Component = {
  template: `<div>
    <span> {{ value }}</span>
    <button v-longclick="() => increase(1)"
      @click="increase(1)"></button>
            </div>`,
  data () {
    return {
      value: 0
    }
  },
  methods: {
    increase (amount) {
      this.value += amount
    }
  }
}

describe('longclick directive', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  })

  it('should fire event perodically', () => {
    const localVue = createLocalVue()
    const longClickInstances = longClickDirective({delay: 400, interval: 50})
    localVue.directive('longclick',  longClickInstances)

    const wrapper = shallowMount(Component, {
      localVue
    })

    wrapper.find('button').trigger('mousedown')
    jest.advanceTimersByTime(400)
    expect(wrapper.vm.value).toBe(1)
    jest.advanceTimersByTime(50)
    expect(wrapper.vm.value).toBe(2)
    jest.advanceTimersByTime(300)
    expect(wrapper.vm.value).toBe(8)

    wrapper.find('button').trigger('mouseout')
    jest.advanceTimersByTime(300)
    expect(wrapper.vm.value).toBe(8)
  })

  it('should fire event once if interval is 0', () => {
    const localVue = createLocalVue()
    const longClickInstances = longClickDirective({delay: 400, interval: 0})
    localVue.directive('longclick',  longClickInstances)

    const wrapper = shallowMount(Component, {
      localVue
    })

    wrapper.find('button').trigger('mousedown')
    jest.advanceTimersByTime(400)
    expect(wrapper.vm.value).toBe(1)
    jest.advanceTimersByTime(50)
    expect(wrapper.vm.value).toBe(1)
    jest.advanceTimersByTime(300)
    expect(wrapper.vm.value).toBe(1)
  })
})
