# SettingSet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Settings Files ](imtadminapi_setting.md "Settings Files")/ SettingSet | [](imtadminapi_settingget.md "SettingGet") [](imtadminapi_settingdelete.md "SettingDelete") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SettingSet
Sends the settings file to the trade server.
C++
MTAPIRES IMTAdminAPI::SettingSet( LPCWSTR section, // directory name LPCWSTR key, // file name const LPVOID& indata, // passed data const UINT& indata_len // size of passed data )  
---  
.NET
MTRetCode CIMTAdminAPI.SettingSet( string section, // directory name string key, // file name byte[] indata // passed data )  
---  
Python
AdminAPI.SettingSet( section, # directory name key, # file name indata # passed data )  
---  
Parameters
section
[in] The name of the subfolder in the manager account directory, to which you want to write the settings file.
key
[in] The name of the settings file. Only files with the following extensions are allowed: ini, cfg, dat, json, config, sqlite, xml, conf, settings, key, db, txt and log, as well as files without extensions.
indata
[out] A reference to data to be sent.
indata_len
[out] A reference to the size of passed data in bytes.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code. For example:
  * [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") — invalid parameters, for example the name of the folder or file.
  * [MT_RET_CFG_LIMIT_REACHED](retcodes_configs.md "Configuration Management") — the [maximum number of files or folders](imtadminapi_settingset.htm#limit) has been reached.
  * [MT_RET_ERR_DISK](retcodes_common.md "Common errors") — writing the file to the disk failed.

Note
The path to the settings file is formed as follows: [trade server directory]\settings\\[manager login]\section\key. section and key — the first and the second parameters of the IMTAdminAPI::SettingSet method, manager login is the manager's account, using which the application is [connected to the trade server](imtadminapi_connect.md "Connect").
The format of the settings file and its parsing methods are determined by the file creator. IMTAdminAPI::Setting* methods work with arbitrary data.
Only one level of nesting and no more than 128 folders can be stored inside each manager directory. The maximum number of settings files is 1024. The size of each configuration file is no more than 16 MB.
The IMTAdminAPI::SettingSet method works with files, not with individual settings. Therefore, a whole settings file needs to be formed to send changes to the server.
The Manager API does not track changes in files on the server side. Every call of IMTAdminAPI::SettingSet re-writes the specified settings file, even if it has already been changed by another application. Only the last submitted version is always stored on the server.
Settings should not be updated on the server too often, i.e. every time when settings are edited on the application side. After editing settings, the user can immediately change some other settings or revert changes. It is recommended to send updates not more than once in 5 minutes.