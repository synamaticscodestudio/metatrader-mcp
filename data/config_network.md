# Network (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces")/ Network | [](imtconcommonsink_oncommonsync.md "OnCommonSync") [](imtconserver.md "IMTConServer") |
| --- | --- | --- |
| --- | --- |

Network Configuration
Network configuration means the management of settings of the the server components of the platform: main and ordinary trade servers, history and access servers, backup servers.
The following interfaces of the configuration of platform components are available:
  * [IMTConServer](config_network.htm#imtconserver)
  * [IMTConServerTrade](config_network.htm#imtconservertrade)
  * [IMTConServerHistory](config_network.htm#imtconserverhistory)
  * [IMTConServerBackup](config_network.htm#imtconserverbackup)
  * [IMTConBackupFolder](imtconbackupfolder.md "IMTConBackupFolder")
  * [IMTConServerAccess](config_network.htm#imtconserveraccess)
  * [IMTConServerAntiDDoS](imtconserverantiddos.md "IMTConServerAntiDDoS")
  * [IMTConClusterState](imtconclusterstate.md "IMTConClusterState")
  * [IMTConServerRange](config_network.htm#imtconserverrange)
  * [IMTConServerAddressRange](imtconserveraddressrange.md "IMTConServerAddressRange")
  * [IMTConServerSink](config_network.htm#imtconsserversink)

The below figure shows different elements of configuration of the platform components in the MetaTrader 5 Administrator, to help you understand the purpose of the interfaces:
The following elements are shown above:
  1. [Server Type](imtconserver_type.md "Type").
  2. [Server Name](imtconserver_name.md "Name").
  3. [Server Address](imtconserver_address.md "Address").
  4. [Server ID](imtconserver_id.md "Id").
  5. [Base priority of the Access Server](imtconserveraccess_priority.md "Priority").
  6. [The current priority of the Access Server](imtconserveraccess_prioritycurrent.md "PriorityCurrent").
  7. [The current level of CPU](imtconserver_cputotal.md "CPUTotal").
  8. [The list of all server configurations](imtconserver.md "IMTConServer").

The detailed examples of configurations of the platform components are shown below.
IMTConServerRange
The [IMTConServerRange](imtconserverrange.md "IMTConServerRange") interface is used to set the ranges of accounts, orders and deals on trade servers.
The figure shows a tab of configuration of accounts range of a trade server in MetaTrader 5 Administrator:
  1. [Beginning of the range](imtconserverrange_from.md "From").
  2. [End of the range](imtconserverrange_to.md "To").

IMTConServerTrade
The [IMTConServerTrade](imtconservertrade.md "IMTConServerTrade") interface contains methods for managing settings that are specific to Trade Servers.
The figure shows the following elements of trade server setup in MetaTrader 5 Administrator:
  1. [Mode of operation with demo accounts](imtconservertrade_demomode.md "DemoMode").
  2. [Time of the day end](imtconservertrade_overnighttime.md "OvernightTime").
  3. [Days of operations associated with the end of the trading day](imtconservertrade_overnightdays.md "OvernightDays").
  4. [Daily report generation mode](imtconservertrade_overnightmode.md "OvernightMode").
  5. [Monthly report generation mode](imtconservertrade_overmonthmode.md "OvermonthMode").
  6. [Setting the range of accounts](imtconservertrade_loginsrangeadd.md "LoginsRangeAdd").
  7. [Setting the range of orders](imtconservertrade_ordersrangeadd.md "OrdersRangeAdd").
  8. [Setting the range of deals](imtconservertrade_dealsrangeadd.md "DealsRangeAdd").

IMTConServerHistory
The [IMTConServerHistory](imtconserverhistory.md "IMTConServerHistory") interface contains methods for managing settings that are specific to History Servers.
The figure shows the following elements of History Server setup in MetaTrader 5 Administrator:
  1. [Data feed timeouts](imtconserverhistory_datafeedstimeout.md "DatafeedsTimeout").
  2. [Maximum number of news](imtconserverhistory_newsmax.md "NewsMax").

IMTConServerBackup
The [IMTConServerBackup](imtconserverbackup.md "IMTConServerBackup") interface contains methods for managing settings that are specific to Backup Servers.
The figure shows the following elements of Backup Server setup in MetaTrader 5 Administrator:
  1. [A server to back up](imtconserverbackup_masterserver.md "MasterServer").
  2. [The backup path](imtconserverbackup_backuppath.md "BackupPath").
  3. [The frequency of backup](imtconserverbackup_backupperiod.md "BackupPeriod").
  4. [A period to keep backups](imtconserverbackup_backupttl.md "BackupTTL").
  5. [Time to create full backups](imtconserverbackup_backupfulltime.md "BackupFullTime").

IMTConServerAccess
The [IMTConServerAccess](imtconserveraccess.md "IMTConServerAccess") interface contains methods for managing settings that are specific to Access Servers.
The figure shows the following elements of Access Server setup in MetaTrader 5 Administrator:
  1. [Server priority](imtconserveraccess_priority.md "Priority").
  2. [Enable/disable antiflood control](imtconserveraccess_antifloodenabled.md "AntifloodEnabled").
  3. [Number of connections](imtconserveraccess_antifloodconnects.md "AntifloodConnects").
  4. [Maximum number of news](imtconserveraccess_newsmax.md "NewsMax").
  5. [Number of incorrect connections](imtconserveraccess_antiflooderrors.md "AntifloodErrors").
  6. [Setup of allowed types of connections](imtconserveraccess_accessflags.md "AccessFlags").
  7. [Setup of serviced Trade Servers](imtconserveraccess_serversadd.md "ServersAdd").

IMTConServer
The [IMTConServer](imtconserver.md "IMTConServer") interface contains methods for managing settings that are common to all types of servers.
The figure shows the following server parameters in MetaTrader 5 Administrator:
  1. [Version](imtconserver_version.md "Version"), [build](imtconserver_build.md "Build") and [build date](imtconserver_builddate.md "BuildDate") of the server.
  2. [Time of the last server boot](imtconserver_lastboottime.md "LastBootTime").
  3. [Version of the operating system](imtconserver_os.md "OS").
  4. [Processor type](imtconserver_cpu.md "CPU").
  5. [The amount of RAM](imtconserver_memoryfree.md "MemoryFree").
  6. [The amount of disk space](imtconserver_hddfree.md "HDDFree").
  7. [Maximum number of connections](imtconserver_connectsmax.md "ConnectsMax").
  8. [Maximum load of the network](imtconserver_networkmax.md "NetworkMax").
  9. [Maximum CPU load](imtconserver_cpuusagemax.md "CPUUsageMax").
  10. [Minimum amount of free memory](imtconserver_memoryfreemin.md "MemoryFreeMin").
  11. The spead of data [reading](imtconserver_hddspeedread.md "HDDSpeedRead") and [writing](imtconserver_hddspeedwrite.md "HDDSpeedWrite") to a hard disk.
  12. The level of [fragmentation](imtconserver_hddfragments.md "HDDFragments") of server files.

IMTConsServerSink
The [IMTConServerSink](imtconserversink.md "IMTConServerSink") interface contains the handlers of events of changes in the configurations of the platform components.