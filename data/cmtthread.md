# CMTThread (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools")/ CMTThread | [](cmtsync_trylock.md "TryLock") [](cmtthread_start.md "Start") |
| --- | --- | --- |
| --- | --- |

CMTThread
This class is a wrapper of WinAPI thread. It allows running parallel computing in a separate thread.
The class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Start](cmtthread_start.md "Start") | Start the thread. After calling this method, the function thread_func starts. |
| [Shutdown](cmtthread_shutdown.md "Shutdown") | Wait for the completion of thread operation during the specified time period. |
| [Terminate](cmtthread_terminate.md "Terminate") | Forced completion of a thread. |
| [IsBusy](cmtthread_isbusy.md "IsBusy") | Check the thread activity. |
| [Handle](cmtthread_handle.md "Handle") | Get a thread handle (WinAPI-descriptor). |
| [Priority](cmtthread_priority.md "Priority") | Set a thread priority. |