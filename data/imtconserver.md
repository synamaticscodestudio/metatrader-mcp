# IMTConServer (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network")/ IMTConServer | [](config_network.md "Network") [](imtconserver_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConServer
The IMTConServer interface contains methods for managing the settings that are common to all types of servers.
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconserver_release.md "Release") | Delete the current object. |
| [Assign](imtconserver_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtconserver_clear.md "Clear") | Clear an object. |
| [Type](imtconserver_type.md "Type") | Get and set the server type. |
| [Name](imtconserver_name.md "Name") | Get and set the server name. |
| [Address](imtconserver_address.md "Address") | Get and set the server IPv4 address. |
| [AddressTotal](imtconserver_addresstotal.md "AddressTotal") | Get the number of IPv4 addresses available on a computer. |
| [AddressNext](imtconserver_addressnext.md "AddressNext") | Get an available IPv4 address by the index. |
| [AddressIPv6](imtconserver_addressipv6.md "AddressIPv6") | Get and set the IPv6 address of the server. |
| [AddressIPv6Total](imtconserver_addressipv6total.md "AddressIPv6Total") | Get the number of IPv6 addresses available on a computer. |
| [AddressIPv6Next](imtconserver_addressipv6next.md "AddressIPv6Next") | Get an available IPv6 address by the index. |
| [Id](imtconserver_id.md "Id") | Get and set the server ID. |
| [Password](imtconserver_password.md "Password") | Set the server password. |
| [PasswordCheck](imtconserver_passwordcheck.md "PasswordCheck") | Check the server password. |
| [ServiceTime](imtconserver_servicetime.md "ServiceTime") | Get and set the service time (time of optimization), when various operations aimed at increasing the performance and reliability of the platform are conducted. |
| [AdaptersCurrent](imtconserver_adapterscurrent.md "AdaptersCurrent") | Get and set the parameter network controller. |
| [AdaptersTotal](imtconserver_adapterstotal.md "AdaptersTotal") | Get the number of available network controllers. |
| [AdaptersNext](imtconserver_adaptersnext.md "AdaptersNext") | Get the network controller by the index. |
| [Version](imtconserver_version.md "Version") | Get the server version. |
| [Build](imtconserver_build.md "Build") | Get the server build. |
| [BuildDate](imtconserver_builddate.md "BuildDate") | Get the date of the server build. |
| [LastBootTime](imtconserver_lastboottime.md "LastBootTime") | Get the time of the last server boot. |
| [Connected](imtconserver_connected.md "Connected") | Get the status of a server connection to the main trade server. |
| [OS](imtconserver_os.md "OS") | Get the operating system of the computer running the server. |
| [CPU](imtconserver_cpu.md "CPU") | Get the processor type of the computer that is running the server. |
| [CPUTotal](imtconserver_cputotal.md "CPUTotal") | Get the number of CPU cores. |
| [CPUUsageMax](imtconserver_cpuusagemax.md "CPUUsageMax") | Get the maximum level of CPU usage. |
| [CPUUsageCritical](imtconserver_cpuusagecritical.md "CPUUsageCritical") | Get the critical level of CPU usage. |
| [MemoryTotal](imtconserver_memorytotal.md "MemoryTotal") | Get the total amount of available RAM. |
| [MemoryFree](imtconserver_memoryfree.md "MemoryFree") | Get the amount of free RAM. |
| [MemoryFreeMin](imtconserver_memoryfreemin.md "MemoryFreeMin") | Get the minimum available amount of free RAM and virtual memory. |
| [MemoryFreeCritical](imtconserver_memoryfreecritical.md "MemoryFreeCritical") | Get the critical level of free RAM. |
| [HDDTotal](imtconserver_hddtotal.md "HDDTotal") | Get the total volume of the hard disk. |
| [HDDFree](imtconserver_hddfree.md "HDDFree") | Get the amount of free memory on the hard disk. |
| [HDDFreeCritical](imtconserver_hddfreecritical.md "HDDFreeCritical") | Get the critical amount of free memory on the hard disk. |
| [HDDFragments](imtconserver_hddfragments.md "HDDFragments") | Get the current level of fragmentation of server files. |
| [HDDFragmentsCritical](imtconserver_hddfragmentscritical.md "HDDFragmentsCritical") | Get the critical level of fragmentation of server files. |
| [HDDSpeedRead](imtconserver_hddspeedread.md "HDDSpeedRead") | Get the current speed of data reading from the hard disk. |
| [HDDSpeedReadCritical](imtconserver_hddspeedreadcritical.md "HDDSpeedReadCritical") | Get the critical speed of data reading from the hard disk. |
| [HDDSpeedWrite](imtconserver_hddspeedwrite.md "HDDSpeedWrite") | Get the current speed of information writing on the hard disk. |
| [HDDSpeedWriteCritical](imtconserver_hddspeedwritecritical.md "HDDSpeedWriteCritical") | Get the critical speed of information writing on the hard disk. |
| [ConnectsMax](imtconserver_connectsmax.md "ConnectsMax") | Get the maximum number of simultaneous connections to a server that has been achieved during the day. |
| [ConnectsCritical](imtconserver_connectscritical.md "ConnectsCritical") | Get the critical number of simultaneous connections to the server. |
| [NetworkMax](imtconserver_networkmax.md "NetworkMax") | Get the maximum level of network usage reached during the day. |
| [NetworkCritical](imtconserver_networkcritical.md "NetworkCritical") | Get the critical level of network usage. |
| [TradeServer](imtconserver_tradeserver.md "TradeServer") | The interface of the Trade Server. |
| [HistoryServer](imtconserver_historyserver.md "HistoryServer") | The interface of the History Server. |
| [AccessServer](imtconserver_accessserver.md "AccessServer") | The interface of the Access Server. |
| [BackupServer](imtconserver_backupserver.md "BackupServer") | The interface of the Backup Server. |
| [AntiDDoSServer](imtconserver_antiddosserver.md "AntiDDoSServer") | The Anti DDoS server interface. |
| [PointsAdd](imtconserver_pointsadd.md "PointsAdd") | Add an access point. |
| [PointsUpdate](imtconserver_pointsupdate.md "PointsUpdate") | Update of the access point at the specified position in the list. |
| [PointsShift](imtconserver_pointsshift.md "PointsShift") | Move an access point in the list. |
| [PointsDelete](imtconserver_pointsdelete.md "PointsDelete") | Delete an access point by the index. |
| [PointsClear](imtconserver_pointsclear.md "PointsClear") | Clear the list of access points. |
| [PointsTotal](imtconserver_pointstotal.md "PointsTotal") | Get the number of access points of the Access Server. |
| [PointsNext](imtconserver_pointsnext.md "PointsNext") | Get an access point by the index. |
| [BindingsAdd](imtconserver_bindingsadd.md "BindingsAdd") | Add a binding. |
| [BindingsUpdate](imtconserver_bindingsupdate.md "BindingsUpdate") | Update the binding at the specified position in the list. |
| [BindingsShift](imtconserver_bindingsshift.md "BindingsShift") | Move a binding in the list. |
| [BindingsDelete](imtconserver_bindingsdelete.md "BindingsDelete") | Delete a binding by the index. |
| [BindingsClear](imtconserver_bindingsclear.md "BindingsClear") | Clear the list of bindings. |
| [BindingsTotal](imtconserver_bindingstotal.md "BindingsTotal") | Get the number of bindings of the Access Server. |
| [BindingsNext](imtconserver_bindingsnext.md "BindingsNext") | Get a binding by the index. |
| [FailoverMode](imtconserver_failovermode.md "FailoverMode") | Get and set the automated failover mode. |
| [FailoverTime](imtconserver_failovertimeout.md "FailoverTimeout") | Get the downtime of the primary server, after which the platform switches to a backup server. |
| [ClusterStateTotal](imtconserver_clusterstatetotal.md "ClusterStateTotal") | Get the number of cluster components, the status of connection with which can be analyzed for the current server. |
| [ClusterStateNext](imtconserver_clusterstatenext.md "ClusterStateNext") | Get the network connection status with a cluster component having the specified index. |
| [ClusterStateGet](imtconserver_clusterstateget.md "ClusterStateGet") | Get the network connection status with a cluster component having the specified identifier. |

The IMTConServer class contains one enumeration:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnServerTypes](imtconserver_enum.md "Enumerations") | Server type. |
| [EnFailoverModes](imtconserver_enum.htm#enfailovermodes) | Automated failover modes |