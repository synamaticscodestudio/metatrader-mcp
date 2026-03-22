# Terminate (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTThread ](cmtthread.md "CMTThread")/ Terminate | [](cmtthread_shutdown.md "Shutdown") [](cmtthread_isbusy.md "IsBusy") |
| --- | --- | --- |
| --- | --- |

CMTThread::Terminate
Forced completion of a thread.
void CMTThread::Terminate()  
---  
Note
It is recommended not to use this method.
For a forced completion of a thread you should better use a special completion flag, which is checked from the [thread operation function](cmtthread_start.md "Start").