class MyAsyncCallbacks {
    init(asyncId, type, triggerAsyncId, resource) { }
    destroy(asyncId) {}
  }
  
class MyAddedCallbacks extends MyAsyncCallbacks {
    before(asyncId) { }
    after(asyncId) { }
}
  
const asyncHook = async_hooks.createHook(new MyAddedCallbacks());