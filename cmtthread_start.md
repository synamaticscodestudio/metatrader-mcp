# Start (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTThread ](cmtthread.md "CMTThread")/ Start | [](cmtthread.md "CMTThread") [](cmtthread_shutdown.md "Shutdown") |
| --- | --- | --- |
| --- | --- |

CMTThread::Start
Start the thread. After calling this method, the function thread_func starts.
bool CMTThread::Start( unsigned (__stdcall *thread_func)(void*), // Function for execution in the thread void *thread_param, // Parameter for the function const UINT stack_size // Stack size )  
---  
Parameters
(__stdcall *thread_func)(void*)
[in] A pointer to the function of the following form:
unsigned __stdcall MyThreadFunction(void *myparam) { return(0); }  
---  
where MyThreadFunction is the name of the function that will be executed in the thread, and myparam is the parameter of the function.
*thread_param
[in] A pointer to the value that will be passed to the MYThreadFunction function as the myparam parameter.
stack_size
[in] The size of the thread stack in bytes.
Return Value
If successful, returns true, otherwise returns false.