import { h } from 'vue'

const App = {

  // implement <div id="hello"><span>world</span></div>
  // render() {
  //   return h('div', {
  //     id: 'hello'
  //   }, [h('span', 'world')])
  // }

  // implement v-if="ok"
  // render() {
  //   return this.ok
  //     ? h('div', {id: 'hello'}, [h('span', 'world')])
  //     : h('div', {id: 'hi'}, 'others')
  // }

  // implement v-else-if="other"
  // render() {
  //   return this.ok
  //     ? h('div', {id: 'hello'}, [h('span','world')])
  //     : this.otherConditions
  //     ? h('p', 'other branches')
  //     : h('span')
  // }

  // implement v-for="item in list"
  // render() {
  //   return this.list.map(item => {
  //     return h('div', { key: item.id }, item.text)
  //   })
  // }

  // **************************************************//

  /*
    通常写功能性组件的时候会使用到render funcition.
    A component that sometimes would expect to
    take some slot content, wrap them up or manipulate
    them in some way
  */
  // slot
  // render() {
  //   // slot content, which will be an array
  //   // we can pass props to a scoped slot. 这里是作为参数传递到default()中
  //   const slot =  this.$slots.default
  //     ? this.$slots.default()
  //     : []
  //   // we call return this slot array directly or put it
  //   // in the children position of another element

  //   return h('div', slot)
  // }

  // manipulate slot
  // render() {
  //   const slot = this.$slots.default
  //     ? this.$slots.default()
  //     : []

  //     // manipulate the slot in some way
  //     // 值得注意的是, slot对象其实是包含需要插入的节点的数组
  //     slot.map(vnode => {
  //       return h('div', [vnode])
  //     })
  // }


}

// implement stack component
//#region  需要实现如下的Stack组件
  /* 
    <Stack size='4'>
      <div>hello</div>
      <Stack size='4'>
        <div>hello</div>
        <div>hello</div>
      </Stack>
    </Stack>

    <div class="stack">
      <div class="mt-4">
        <div>hello</div>
      </div>
      <div class="mt-4">
        <div class="stack">
          <div class="mt-4">
            <div>hello</div>
          </div>
        </div>
      </div>
    </div>
  */
//#endregion

const Stack = {
  render() {
    const slot = this.$slots.default
      ? this.$slots.default()
      : []

    return h('div', {class: 'stack'}, slot.map(child => {
      return h('div', { class: `mt-${this.$props.size}`}, [child])
    }))
  }
}