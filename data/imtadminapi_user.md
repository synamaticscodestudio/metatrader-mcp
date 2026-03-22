# Functions (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface")/ Users | [](imtadminapi_attachmentrequest.md "AttachmentRequest") [](imtadminapi_user_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

User Functions
Using these functions, you can manage the user database on the server and user access to the trading platform. The following functions for managing users are available:
| Functions | Purpose |
| --- | --- |
| --- | --- |
| [UserCreate](imtadminapi_usercreate.md "UserCreate") | Create an object of a client record. |
| [UserCreateArray](imtadminapi_usercreatearray.md "UserCreateArray") | Create an object of an array of client records. |
| [UserAdd](imtadminapi_useradd.md "UserAdd") | Add a user. |
| [UserDelete](imtadminapi_userdelete.md "UserDelete") | Delete a user. |
| [UserDeleteBatch](imtadminapi_userdeletebatch.md "UserDeleteBatch") | Delete multiple accounts. |
| [UserUpdate](imtadminapi_userupdate.md "UserUpdate") | Update a user. |
| [UserUpdateBatch](imtadminapi_userupdatebatch.md "UserUpdateBatch") | Update multiple accounts. |
| [UserUpdateBatchArray](imtadminapi_userupdatebatcharray.md "UserUpdateBatchArray") | Update multiple accounts. |
| [UserRequest](imtadminapi_userrequest.md "UserRequest") | Request a client record by the login from a server. |
| [UserRequestArray](imtadminapi_userrequestarray.md "UserRequestArray") | Request an array of client records by the group name. |
| [UserRequestByLogins](imtadminapi_userrequestbylogins.md "UserRequestByLogins") | Request accounts from the server by a list of logins. |
| [UserPasswordCheck](imtadminapi_userpasswordcheck.md "UserPasswordCheck") | Check the user's password. |
| [UserPasswordChange](imtadminapi_userpasswordchange.md "UserPasswordChange") | Change the user's password. |
| [UserCertCreate](imtadminapi_usercertcreate.md "UserCertCreate") | Create an object of a certificate. |
| [UserCertUpdate](imtadminapi_usercertupdate.md "UserCertUpdate") | Add or update a client certificate. |
| [UserCertGet](imtadminapi_usercertget.md "UserCertGet") | Get the certificate of a client by the login. |
| [UserCertDelete](imtadminapi_usercertdelete.md "UserCertDelete") | Reset the user certificate. |
| [UserCertConfirm](imtadminapi_usercertconfirm.md "UserCertConfirm") | Confirm the user certificate. |
| [UserArchive](imtadminapi_userarchive.md "UserArchive") | Move a user to an archive database. |
| [UserArchiveBatch](imtadminapi_userarchivebatch.md "UserArchiveBatch") | Move multiple accounts to an archive database. |
| [UserArchiveRequest](imtadminapi_userarchiverequest.md "UserArchiveRequest") | Request a client record from an archive database. |
| [UserArchiveRequestArray](imtadminapi_userarchiverequestarray.md "UserBackupRequestArray") | Request accounts from an archive databased, filtered by groups. |
| [UserArchiveRequestByLogins](imtadminapi_userarchiverequestbylogins.md "UserArchiveRequestByLogins") | Request accounts from an archive databased, filtered by logins. |
| [UserBackupRequest](imtadminapi_userbackuprequest.md "UserBackupRequest") | Request a client record from a backup database. |
| [UserBackupRequestArray](imtadminapi_userbackuprequestarray.md "UserBackupRequestArray") | Request accounts from the specified server's backup, filtered by groups. |
| [UserBackupRequestByLogins](imtadminapi_userbackuprequestbylogins.md "UserBackupRequestByLogins") | Request accounts from the specified server's backup, filtered by a list of logins. |
| [UserBackupList](imtadminapi_userbackuplist.md "UserBackupList") | Request the dates of backup databases of users for the specified time range. |
| [UserRestore](imtadminapi_userrestore.md "UserRestore") | Restore a user from an archive or backup database. |
| [UserRestoreBatch](imtadminapi_userrestorebatch.md "UserRestoreBatch") | Restore multiple accounts from an archive or backup database. |
| [UserRestoreBatchArray](imtadminapi_userrestorebatcharray.md "UserRestoreBatchArray") | Restore multiple accounts from an archive or backup database. |
| [UserBalanceCheck](imtadminapi_userbalancecheck.md "UserBalanceCheck") | Check and adjust a client's balance and credit assets. |
| [UserBalanceCheckBatch](imtadminapi_userbalancecheckbatch.md "UserBalanceCheckBatch") | Check and adjust balance and credit funds for multiple clients. |
| [UserExternalRequest](imtadminapi_userexternalrequest.md "UserExternalRequest") | Request a client record from a server by the [gateway identifier](imtcongateway_id.md "ID") and/or the [account number in an external trading system](imtuser_externalaccountget.md "ExternalAccountGet"). |
| [UserExternalSync](imtadminapi_userexternalsync.md "UserExternalSync") | Synchronizing client's trading status with an external trading system. |
| [UserLogins](imtadminapi_userlogins.md "UserLogins") | Returns an array of logins of the clients who are included in the specified group. |
| [NotificationsSend](imtadminapi_notificationssend.md "NotificationsSend") | Sends push notifications to mobile devices. |