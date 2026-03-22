# FilesCopy (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ CMTFile ](cmtfile.md "CMTFile")/ FilesCopy | [](cmtfile_flush.md "Flush") [](cmtfile_directorycreate.md "DirectoryCreate") |
| --- | --- | --- |
| --- | --- |

CMTFile::FilesCopy
Copy files from one directory to another
static int CMTFile::FilesCopy( const CMTStr& path, // Source directory const CMTStr& newpath, // Destination directory const CMTStr& mask, // Mask of files const bool subdir // Flag of subdirectories copying )  
---  
Parameters
path
[in] The path to the directory, from which you want to copy files.
newpath
[in] The path to the directory, to which you want to copy files.
mask
[in] The mask of the files to copy. For example, *.* , *.dat etc.
subdir
[in] The flag of subdirectories copying. If you specify true, the subdirectories are copied. If you specify false, only the files from the root directory are copied.
Return Value
The number of files copied.