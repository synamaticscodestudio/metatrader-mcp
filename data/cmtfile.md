# CMTFile (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools")/ CMTFile | [](smttime_sec.md "Sec") [](cmtfile_open.md "Open") |
| --- | --- | --- |
| --- | --- |

CMTFile
This class contains additional functions for working with files.
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Open](cmtfile_open.md "Open") | Open a file. |
| [OpenRead](cmtfile_openread.md "OpenRead") | Open the specified file for reading. |
| [OpenWrite](cmtfile_openwrite.md "OpenWrite") | Open the specified file for writing. |
| [Close](cmtfile_close.md "Close") | Close the previously opened file. |
| [Handle](cmtfile_handle.md "Handle") | Get the handle (Windows descriptor) of a file, with which you can work using the appropriate WinAPI methods. |
| [IsOpen](cmtfile_isopen.md "IsOpen") | Check whether there is an open file (file handle). |
| [Size](cmtfile_size.md "Size") | Get the file size. |
| [TimeCreate](cmtfile_timecreate.md "TimeCreate") | Get the creation time of the currently open file. |
| [TimeLastAccess](cmtfile_timelastaccess.md "TimeLastAccess") | Get the time of the last access to the currently open file. |
| [TimeLastModify](cmtfile_timelastmodify.md "TimeLastModify") | Get the time of the last modification of the currently open file. |
| [CurrPos](cmtfile_currpos.md "CurrPos") | Get the current position in the open file. |
| [Read](cmtfile_read.md "Read") | Reading from a currently open file. |
| [Write](cmtfile_write.md "Write") | Write to the currently open file. |
| [Seek](cmtfile_seek.md "Seek") | Move the pointer of the current position in a file. |
| [ChangeSize](cmtfile_changesize.md "ChangeSize") | Change the size of the current file to the specified size. |
| [Flush](cmtfile_flush.md "Flush") | Forced writing of data from the file cache to disk. |
| [FilesCopy](cmtfile_filescopy.md "FilesCopy") | Copy files from one directory to another |
| [DirectoryCreate](cmtfile_directorycreate.md "DirectoryCreate") | Create a directory. |
| [DirectoryRemove](cmtfile_directoryremove.md "DirectoryRemove") | Remove a directory and all its contents. |
| [DirectoryClean](cmtfile_directoryclean.md "DirectoryClean") | Delete files from a specified directory based on the file mask. |

Constants
The following constants are used in the class:
| Constant | Value |
| --- | --- |
| --- | --- |
| INVALID_POSITION | _UI64_MAX |