# DirectoryCreate (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTFile ](cmtfile.md "CMTFile")/ DirectoryCreate | [](cmtfile_filescopy.md "FilesCopy") [](cmtfile_directoryremove.md "DirectoryRemove") |
| --- | --- | --- |
| --- | --- |

CMTFile::DirectoryCreate
Create a directory.
static bool CMTFile::DirectoryCreate( const CMTStr& path // Path to the directory )  
---  
Parameters
path
[in] Path to the directory that you want to create.
Return Value
True if successful, otherwise false.
Note
If necessary, this method creates an entire chain of directories to the specified one. For example, of path C:\Folder1\Subfolder1 is specified, but Folder1 does not exist, it will be created.