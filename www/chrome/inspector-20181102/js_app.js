allDescriptors.push(...[{"dependencies":["components"],"extensions":[{"className":"JsMain.JsMain","type":"early-initialization"}],"name":"js_main"},{"dependencies":["profiler"],"extensions":[{"title":"Profiler","id":"js_profiler","className":"Profiler.JSProfilerPanel","location":"panel","type":"view","order":65}],"name":"js_profiler"}]);applicationDescriptor.modules.push(...[{"type":"autostart","name":"js_main"},{"name":"js_profiler"}])
self['JsMain']=self['JsMain']||{};JsMain.JsMain=class extends Common.Object{run(){Host.userMetrics.actionTaken(Host.UserMetrics.Action.ConnectToNodeJSDirectly);const target=SDK.targetManager.createTarget('main',Common.UIString('Main'),SDK.Target.Type.Node,this._createMainConnection.bind(this),null);target.runtimeAgent().runIfWaitingForDebugger();InspectorFrontendHost.connectionReady();}
_createMainConnection(params){return SDK.createMainConnection(params,()=>Components.TargetDetachedDialog.webSocketConnectionLost());}};;;