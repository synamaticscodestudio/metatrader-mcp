# Lock (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTSync ](cmtsync.md "CMTSync")/ Lock | [](cmtsync.md "CMTSync") [](cmtsync_unlock.md "Unlock") |
| --- | --- | --- |
| --- | --- |

CMTSync::Lock
The function is used to capture a critical section. After being called, the method waits until all other threads that use the section release it using the [CMTSync::Unlock](cmtsync_unlock.md "Unlock") method and then captures it. This ensures that after the call of CMTSync::Lock, a synchronization object will be used only by one thread.
void CMTSync::Lock()  
---