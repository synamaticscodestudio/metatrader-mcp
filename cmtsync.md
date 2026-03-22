# CMTSync (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools")/ CMTSync | [](cmtstr_findrchar.md "FindRChar") [](cmtsync_lock.md "Lock") |
| --- | --- | --- |
| --- | --- |

CMTSync
This class is a wrapper for a standard implementation of a critical section (synchronization object) in WinAPI. It allows to implement a synchronized access to a resource.
The class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Lock](cmtsync_lock.md "Lock") | Capture a critical section. |
| [Unlock](cmtsync_unlock.md "Unlock") | Release the critical section after it has been captured. |
| [TryLock](cmtsync_trylock.md "TryLock") | Check if capturing a critical section is possible. |