# IMTConServerBackup (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network")/ IMTConServerBackup | [](imtconserverhistory_newsmax.md "NewsMax") [](imtconserverbackup_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConServerBackup
The IMTConServerBackup interface contains methods for managing settings that are specific to Backup Servers.
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconserverbackup_release.md "Release") | Delete the current object. |
| [Assign](imtconserverbackup_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtconserverbackup_clear.md "Clear") | Clear an object. |
| [MasterServer](imtconserverbackup_masterserver.md "MasterServer") | Get and set the server ID to backup. |
| [BackupPath](imtconserverbackup_backuppath.md "BackupPath") | Get and set the path to save backups. |
| [BackupFullTime](imtconserverbackup_backupfulltime.md "BackupFullTime") | Get and set the time of creating full backup copies. |
| [BackupPeriod](imtconserverbackup_backupperiod.md "BackupPeriod") | Get and set the frequency of backup creation. |
| [BackupTTL](imtconserverbackup_backupttl.md "BackupTTL") | Get and set the period of backup keeping. |
| [BackupFlags](imtconserverbackup_backupflags.md "BackupFlags") | Gets and sets backup flags. |
| [BackupLastSync](imtconserverbackup_backuplastsync.md "BackupLastSync") | Get the time of the last data synchronization with the primary server. |
| [BackupLastStartup](imtconserverbackup_backuplaststartup.md "BackupLastStartup") | Get the creation time of the last database startup copy. |
| [BackupLastFull](imtconserverbackup_backuplastfull.md "BackupLastFull") | Get the creation time of the last file copy of all databases. |
| [BackupLastArchive](imtconserverbackup_backuplastarchive.md "BackupLastArchive") | Get the creation time of the last additional file copy. |
| [SQLExportMode](imtconserverbackup_sqlexportmode.md "SQLExportMode") | Get and set the mode of data export to an SQL database. |
| [SQLExportFlags](imtconserverbackup_sqlexportflags.md "SQLExportFlags") | Get and set additional settings of data export to an SQL database. |
| [SQLExportPeriod](imtconserverbackup_sqlexportperiod.md "SQLExportPeriod") | Get and set the frequency of price and profit data export. |
| [SQLExportServer](imtconserverbackup_sqlexportserver.md "SQLExportServer") | Get and set the address of the server, on which the database is installed. |
| [SQLExportLogin](imtconserverbackup_sqlexportlogin.md "SQLExportLogin") | Get and set the login for connecting to an SQL database. |
| [SQLExportPassword](imtconserverbackup_sqlexportpassword.md "SQLExportPassword") | Get and set the password for connecting to an SQL database. |
| [SQLExportFolder](imtconserverbackup_sqlexportfolder.md "SQLExportFolder") | Get and set the name of the SQL database, to which data is exported. |
| [SQLExportLastSync](imtconserverbackup_sqlexportlastsync.md "SQLExportLastSync") | Get the time of the last full synchronization of databases and platform configurations with the SQL database. |
| [FoldersAdd](imtconserverbackup_foldersadd.md "FoldersAdd") | Add a custom folder to the backup directories list. |
| [FoldersUpdate](imtconserverbackup_foldersupdate.md "FoldersUpdate") | Change a custom folder in the backup directories list. |
| [FoldersDelete](imtconserverbackup_foldersdelete.md "FoldersDelete") | Delete a custom folder from the backup directories list. |
| [FoldersClear](imtconserverbackup_foldersclear.md "FoldersClear") | Clear the list of custom folders for which backup is enabled. |
| [FoldersShift](imtconserverbackup_foldersshift.md "FoldersShift") | Move the backuped custom folder in the list. |
| [FoldersTotal](imtconserverbackup_folderstotal.md "FoldersTotal") | Get the number of custom folders for which backup is enabled. |
| [FoldersNext](imtconserverbackup_foldersnext.md "FoldersNext") | Get a backuped custom folder by index. |

The IMTConServerBackup class contains the following enumerations:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnBackupFlags](imtconserverbackup_enum.htm#enbackupflags) | Backup flags. |
| [EnBackupPeriod](imtconserverbackup_enum.htm#enbackupperiod) | Frequency of the backups. |
| [EnBackupTTL](imtconserverbackup_enum.htm#enbackupttl) | Period to keep backups. |