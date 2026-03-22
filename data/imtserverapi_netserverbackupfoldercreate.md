# NetServerBackupFolderCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Network ](serverapi_config_network.md "Network")/ NetServerBackupFolderCreate | [](imtserverapi_netserveraddressrangecreate.md "NetServerAddressRangeCreate") [](imtserverapi_netserversubscribe.md "NetServerSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::NetServerBackupFolderCreate
Create an object describing the user directory to back up.
IMTConBackupFolder* IMTServerAPI::NetServerBackupFolderCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConBackupFolder](imtconbackupfolder.md "IMTConBackupFolder") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConBackupFolder::Release](imtconbackupfolder_release.md "Release") method of this object.