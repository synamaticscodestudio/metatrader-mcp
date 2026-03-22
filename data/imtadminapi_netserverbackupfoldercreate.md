# NetServerBackupFolderCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Network ](imtadminapi_config_network.md "Functions")/ NetServerBackupFolderCreate | [](imtadminapi_netserverclusterstatecreate.md "NetServerClusterStateCreate") [](imtadminapi_netserversubscribe.md "NetServerSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::NetServerBackupFolderCreate
Create an object describing the user directory to back up.
C++
IMTConBackupFolder* IMTAdminAPI::NetServerBackupFolderCreate()  
---  
.NET
CIMTConBackupFolder CIMTAdminAPI::NetServerBackupFolderCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConBackupFolder](imtconbackupfolder.md "IMTConBackupFolder") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConBackupFolder::Release](imtconbackupfolder_release.md "Release") method of this object.