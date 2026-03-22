# DirectoryRemove (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTFile ](cmtfile.md "CMTFile")/ DirectoryRemove | [](cmtfile_directorycreate.md "DirectoryCreate") [](cmtfile_directoryclean.md "DirectoryClean") |
| --- | --- | --- |
| --- | --- |

CMTFile::DirectoryRemove
Remove a directory and all its contents.
static bool CMTFile::DirectoryRemove( const CMTStr& path // Path to the directory )  
---  
Parameters
path
[in] Path to the directory that you want to remove.
Return Value
True if successful, otherwise false.
Note
Be careful, this method removes a directory and all its contents, including subdirectories.