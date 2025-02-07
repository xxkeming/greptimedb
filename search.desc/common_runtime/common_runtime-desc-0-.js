searchState.loadedDescShard("common_runtime", 0, "Task failed to execute to completion.\nAn owned permission to join on a task (await its …\nTask to execute repeatedly.\nAbort the task associated with the handle.\nReturns a new <code>AbortHandle</code> that can be used to remotely …\nInvoke the task.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGlobal runtimes\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsumes the join error, returning the object with which …\nReturns true if the error was caused by the task being …\nChecks if the task associated with this <code>JoinHandle</code> has …\nReturns true if the error was caused by the task panicking.\nRuntime metrics\nName of the task.\nConsumes the join error, returning the object with which …\nSNAFU context selector for the …\nSNAFU context selector for the <code>Error::BuildRuntime</code> variant\nContains the error value\nSNAFU context selector for the <code>Error::IllegalState</code> variant\nContains the success value\nSNAFU context selector for the <code>Error::WaitGcTaskStop</code> …\nConsume the selector and return the associated error\nConsume the selector and return a <code>Result</code> with the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe options for the global runtimes.\nRun a future to complete in <code>compact</code> thread pool.\nRun a future to complete in <code>global</code> thread pool.\nRun a future to complete in <code>hb</code> thread pool.\nThe number of threads to execute the runtime for compact …\nReturns the global <code>compact</code> thread pool.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe number of threads for the global default runtime.\nReturns the global <code>global</code> thread pool.\nReturns the global <code>hb</code> thread pool.\nInitialize the global runtimes\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRun the blocking operation in <code>compact</code> thread pool.\nRun the blocking operation in <code>global</code> thread pool.\nRun the blocking operation in <code>hb</code> thread pool.\nSpawn a future and execute it in <code>compact</code> thread pool.\nSpawn a future and execute it in <code>global</code> thread pool.\nSpawn a future and execute it in <code>hb</code> thread pool.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTask to execute repeatedly.\nInvoke the task.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nName of the task.\nCreates a new repeated task. The <code>initial_delay</code> is the …\nThe task_fn to run. This is Some if the task is not …\nThe repeated task handle. This handle is Some if the task …\nDropping the dropper will cause runtime to shutdown.\nTask failed to execute to completion.\nAn owned permission to join on a task (await its …\nRun a future to complete, this is the runtime’s entry …\nGet a runtime builder\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSpecifies the limit for additional threads spawned by the …\nGet the name of the runtime\nSpawn a future and execute it in this thread pool\nRun the provided function on an executor dedicated to …\nSets a custom timeout for a thread in the blocking pool.\nSets name of threads spawned by the Runtime thread pool\nSets the number of worker threads the Runtime will use.\nA runtime to run future tasks\nAn owned permission to join on a task (await its …\nRun a future to complete, this is the runtime’s entry …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nSpawn a future and execute it in this thread pool\nRun the provided function on an executor dedicated to …\nAn owned permission to join on a task (await its …\nA runtime to run future tasks\nRun a future to complete, this is the runtime’s entry …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nRateLimiter of this future\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSpawn a future and execute it in this thread pool\nRun the provided function on an executor dedicated to …")