# DemoInactivityPeriod (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ DemoInactivityPeriod | [](imtcongroup_demodeposit.md "DemoDeposit") [](imtcongroup_limithistory.md "LimitHistory") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::DemoInactivityPeriod
Get demo account inactivity period, after which open orders and positions from these accounts will be deleted from the platform databases.
C++
UINT IMTConGroup::DemoInactivityPeriod() const  
---  
.NET (Gateway/Manager API)
uint CIMTConGroup.DemoInactivityPeriod()  
---  
Python (Manager API)
MTConGroup.DemoInactivityPeriod  
---  
Return Value
Inactivity period in the number of days. 0 means that deletion of operations is disabled.
Note
The method is only applicable to demo groups.
The function enables automatic clearing of databases from irrelevant data and thus reducing the load on the platform. If a demo account from this group was not connected to the server for the specified number of days, all its open orders and positions will be deleted from the databases.
Inactivity check is performed on every Sunday at the optimization time ([IMTConServer::ServiceTime](imtconserver_servicetime.md "ServiceTime")) for all accounts in the group, including newly created and existing ones. For example, if the option was disabled for the group and then you set the value of 30, then at the specified time the server will check all accounts in the group. If the server finds any accounts which have not connected to the platform for the last 30 days, all operations of these accounts are deleted from the database. The accounts are not deleted — this process is managed by a separate setting on the trade server ([IMTConServerTrade::DemoPeriod](imtconservertrade_demoperiod.md "DemoPeriod")).
IMTConGroup::DemoInactivityPeriod
Set demo account inactivity period, after which open orders and positions from these accounts will be deleted from the platform databases.
C++
MTAPIRES IMTConGroup::DemoInactivityPeriod( const UINT period // Inactivity period )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.DemoInactivityPeriod( uint period // Inactivity period )  
---  
Python (Manager API)
MTConGroup.DemoInactivityPeriod  
---  
Program Parameters
period
[in] Inactivity period in the number of days. To disable the deletion of operations, set the value to 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method is only applicable to demo groups.
The function enables automatic clearing of databases from irrelevant data and thus reducing the load on the platform. If a demo account from this group was not connected to the server for the specified number of days, all its open orders and positions will be deleted from the databases.
Inactivity check is performed on every Sunday at the optimization time ([IMTConServer::ServiceTime](imtconserver_servicetime.md "ServiceTime")) for all accounts in the group, including newly created and existing ones. For example, if the option was disabled for the group and then you set the value of 30, then at the specified time the server will check all accounts in the group. If the server finds any accounts which have not connected to the platform for the last 30 days, all operations of these accounts are deleted from the database. The accounts are not deleted — this process is managed by a separate setting on the trade server ([IMTConServerTrade::DemoPeriod](imtconservertrade_demoperiod.md "DemoPeriod")).