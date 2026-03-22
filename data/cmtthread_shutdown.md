# Shutdown (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTThread ](cmtthread.md "CMTThread")/ Shutdown | [](cmtthread_start.md "Start") [](cmtthread_terminate.md "Terminate") |
| --- | --- | --- |
| --- | --- |

CMTThread::Shutdown
Wait for the completion of thread operation during the specified time period.
bool CMTThread::Shutdown( const UINT timeout=INFINITE // Time to wait )  
---  
Parameters
timeout=INFINITE
[in] Time to wait for the completion of thread operation in milliseconds.
Return Value
If the thread completes operation after the specified time period, true is returned. If the thread continues to work, it returns false.