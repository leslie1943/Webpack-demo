// compiler.hooks
const compilerHooks = {
  shouldEmit:
    SyncBailHook {
      _args: ['compilation'],
      taps: [],
      interceptors: [],
      call: [Function: lazyCompileHook],
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  done:
    AsyncSeriesHook {
      _args: ['stats'],
      taps: [[Object]],
      interceptors: [],
      call: undefined,
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  additionalPass:
    AsyncSeriesHook {
      _args: [],
      taps: [],
      interceptors: [],
      call: undefined,
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  beforeRun:
    AsyncSeriesHook {
      _args: ['compiler'],
      taps: [[Object]],
      interceptors: [],
      call: undefined,
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  run:
    AsyncSeriesHook {
      _args: ['compiler'],
      taps: [],
      interceptors: [],
      call: undefined,
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  emit:
    AsyncSeriesHook {
      _args: ['compilation'],
      taps: [[Object], [Object], [Object], [Object]],
      interceptors: [],
      call: undefined,
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  assetEmitted:
    AsyncSeriesHook {
      _args: ['file', 'content'],
      taps: [],
      interceptors: [],
      call: undefined,
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  afterEmit:
    AsyncSeriesHook {
      _args: ['compilation'],
      taps: [[Object]],
      interceptors: [],
      call: undefined,
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  thisCompilation:
    SyncHook {
      _args: ['compilation', 'params'],
      taps: [],
      interceptors: [],
      call: [Function: lazyCompileHook],
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  compilation:
    SyncHook {
      _args: ['compilation', 'params'],
      taps: [],
      interceptors: [],
      call: [Function: lazyCompileHook],
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  normalModuleFactory:
    SyncHook {
      _args: ['normalModuleFactory'],
      taps: [],
      interceptors: [],
      call: [Function: lazyCompileHook],
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  contextModuleFactory:
    SyncHook {
      _args: ['contextModulefactory'],
      taps: [],
      interceptors: [],
      call: [Function: lazyCompileHook],
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  beforeCompile:
    AsyncSeriesHook {
      _args: ['params'],
      taps: [],
      interceptors: [],
      call: undefined,
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  compile:
    SyncHook {
      _args: ['params'],
      taps: [],
      interceptors: [],
      call: [Function: lazyCompileHook],
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  make:
    AsyncParallelHook {
      _args: ['compilation'],
      taps: [[Object]],
      interceptors: [],
      call: undefined,
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  afterCompile:
    AsyncSeriesHook {
      _args: ['compilation'],
      taps: [],
      interceptors: [],
      call: undefined,
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  watchRun:
    AsyncSeriesHook {
      _args: ['compiler'],
      taps: [],
      interceptors: [],
      call: undefined,
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  failed:
    SyncHook {
      _args: ['error'],
      taps: [],
      interceptors: [],
      call: [Function: lazyCompileHook],
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  invalid:
    SyncHook {
      _args: ['filename', 'changeTime'],
      taps: [],
      interceptors: [],
      call: [Function: lazyCompileHook],
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  watchClose:
    SyncHook {
      _args: [],
      taps: [],
      interceptors: [],
      call: [Function: lazyCompileHook],
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  infrastructureLog:
    SyncBailHook {
      _args: ['origin', 'type', 'args'],
      taps: [],
      interceptors: [],
      call: [Function: lazyCompileHook],
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  environment:
    SyncHook {
      _args: [],
      taps: [],
      interceptors: [],
      call: [Function: lazyCompileHook],
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  afterEnvironment:
    SyncHook {
      _args: [],
      taps: [],
      interceptors: [],
      call: [Function: lazyCompileHook],
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  afterPlugins:
    SyncHook {
      _args: ['compiler'],
      taps: [],
      interceptors: [],
      call: [Function: lazyCompileHook],
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  afterResolvers:
    SyncHook {
      _args: ['compiler'],
      taps: [],
      interceptors: [],
      call: [Function: lazyCompileHook],
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  entryOption:
    SyncBailHook {
      _args: ['context', 'entry'],
      taps: [],
      interceptors: [],
      call: [Function: lazyCompileHook],
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    },
  infrastructurelog:
    SyncBailHook {
      _args: ['origin', 'type', 'args'],
      taps: [],
      interceptors: [],
      call: [Function: lazyCompileHook],
      promise: [Function: lazyCompileHook],
      callAsync: [Function: lazyCompileHook],
      _x: undefined
    }
}