# Users (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)")/ Users | [](webapi_dealer_updates.md "Get Request Result") [](webapi_user_data_structure.md "Data Structure") |
| --- | --- | --- |
| --- | --- |

Users
The Web API provides the following requests for working with users on the server:
| Request | Description |
| --- | --- |
| --- | --- |
| [/api/user/add](webapi_user_add.md "Add") | Add a user. |
| [/api/user/update](webapi_user_update.md "Update") | Update a user. |
| [/api/user/delete](webapi_user_delete.md "Delete") | Delete a user. |
| [/api/user/get](webapi_user_get.md "Get by Login") | Get user information by login. |
| [/api/user/get_external](webapi_user_external_get.md "Get by External Account") | Get user information by his or her external trading system (exchange) account. |
| [/api/user/get_batch](webapi_user_get_batch.md "Get Multiple") | Get information about multiple users by a list of logins or groups. |
| [/api/user/check_password](webapi_user_pass_check.md "Check Password") | Check user password. |
| [/api/user/change_password](webapi_user_pass_change.md "Change Password") | Change the user password. |
| [/api/user/account/get](webapi_user_account_get.md "Get Trade State") | Get information about user trading status. |
| [/api/user/account/get_batch](webapi_user_account_get_batch.md "Get Multiple Trade States") | Get information about multiple trading accounts by a list of logins or groups. |
| [/api/user/logins](webapi_user_logins.md "Get List") | Get a list of accounts in the specified groups. |
| [/api/user/total](webapi_user_total.md "Get Total") | Get the total number of users on the trading server, available to your manager account. |
| [/api/user/group](webapi_user_group.md "Get Group") | Get user group by login. |
| [/api/user/certificate/update](webapi_user_cert_update.md "Update Certificate") | Add or update user certificates. |
| [/api/user/certificate/get](webapi_user_cert_get.md "Get Certificate") | Get a user certificate. |
| [/api/user/certificate/delete](webapi_user_cert_delete.md "Delete Certificate") | Delete a user certificate. |
| [/api/user/certificate/confirm](webapi_user_cert_confirm.md "Confirm Certificate") | Confirm the user certificate. |
| [/api/user/otp_secret/get](webapi_user_otp_secret_get.md "Get OTP Key") | Get a secret OTP key. |
| [/api/user/otp_secret/set](webapi_user_otp_secret_set.md "Set OTP Key") | Set a secret OTP key. |
| [/api/user/sync_external](webapi_user_external_sync.md "Sync with External System") | Synchronize trading account status with an external trading system. |
| [/api/user/check_balance](webapi_user_balance_check.md "Check Balance") | Check and correct user balance and credit funds. |
| [/api/user/archive/add](webapi_user_archive.md "Move to Archvie") | Move a user to an archive database. |
| [/api/user/archive/get](webapi_user_archive_get.md "Get from Archive") | Get user information from an archive database. |
| [/api/user/archive/get_batch](webapi_user_archive_get_batch.md "Get Multiple from Archive") | Gets bulk user information from an archive database. |
| [/api/user/restore](webapi_user_restore.md "Restore from Archive") | Restore users from archive or backup databases. |
| [/api/user/backup/list](webapi_user_backup_list.md "Get Backups List") | Get user backup creation dates within the specified time range. |
| [/api/user/backup/get](webapi_user_backup_get.md "Get User from Backup") | Get user information from a specific backup on the server. |
| [/api/notification/send](webapi_notifications_send.md "Send Push Notifications") | Send push-notifications to a list of MetaQuotes IDs. |

The format, in which the data about a client are passed, are described in the ["Data Structure"](webapi_user_data_structure.md "Data Structure").