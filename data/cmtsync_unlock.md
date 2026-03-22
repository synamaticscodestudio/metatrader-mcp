# Unlock (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTSync ](cmtsync.md "CMTSync")/ Unlock | [](cmtsync_lock.md "Lock") [](cmtsync_trylock.md "TryLock") |
| --- | --- | --- |
| --- | --- |

CMTSync::Unlock
The function is used to release a critical section after it has been captured by the [CMTSync::Lock](cmtsync_lock.md "Lock") method. After calling this method, the object can be used by other threads.
void CMTSync::Unlock()  
---