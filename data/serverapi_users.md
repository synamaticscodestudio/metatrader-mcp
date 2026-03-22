# Clients (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface")/ Users | [](imtserverapi_attachmentget.md "AttachmentGet") [](imtserverapi_usercreate.md "UserCreate") |
| --- | --- | --- |
| --- | --- |

Users
The MetaTrader 5 Server API allows managing an account base on a trade server. Using the server API, you can add or remove users, edit their data and handle events of changes in the account base.
An important feature of an account base is that users are bound to a certain trade server. Accordingly, the plugin can manage only those users who belong to the server where it is running.
Functions described in this section allow managing the server database of users and their access to the trading platform, as well subscribe and unsubscribe from events associated with changes in the user base.
| Functions | Purpose |
| --- | --- |
| --- | --- |
| [UserCreate](imtserverapi_usercreate.md "UserCreate") | Create an object of a client record. |
| [UserCreateAccount](imtserverapi_usercreate.md "UserCreate") | Create an object of a client's trading account. |
| [UserSubscribe](imtserverapi_usersubscribe.md "UserSubscribe") | Subscribe to events and hooks associated with changes in the client base. |
| [UserUnsubscribe](imtserverapi_userunsubscribe.md "UserUnsubscribe") | Undubscribe from events and hooks associated with changes in the client base. |
| [UserAdd](imtserverapi_useradd.md "UserAdd") | Add a client record. |
| [UserDelete](imtserverapi_userdelete.md "UserDelete") | Delete a client record. |
| [UserUpdate](imtserverapi_userupdate.md "UserUpdate") | Update a client record. |
| [UserTotal](imtserverapi_usertotal.md "UserTotal") | Get the total number of users on a trade server. |
| [UserGet](imtserverapi_userget.md "UserGet") | Get a client record by the login. |
| [UserGroup](imtserverapi_usergroup.md "UserGroup") | Get the group of a client by the login. |
| [UserLogins](imtserverapi_userlogins.md "UserLogins") | Returns an array of logins of the clients who are included in the specified group. |
| [UserPasswordCheck](imtserverapi_userpasswordcheck.md "UserPasswordCheck") | Check the user's password. |
| [UserPasswordChange](imtserverapi_userpasswordchange.md "UserPasswordChange") | Change the user's password. |
| [UserDepositChange](imtserverapi_userdepositchange.md "UserDepositChange") | Conduct a balance operation on a user account. |
| [UserDepositChangeRaw](imtserverapi_userdepositchangeraw.md "UserDepositChangeRaw") | Conduct balance operation on a user account without checking the free margin and the current balance on the account. |
| [UserArchive](imtserverapi_userarchive.md "UserArchive") | Move a client record to an archive database. |
| [UserArchiveGet](imtserverapi_userarchiveget.md "UserArchiveGet") | Request a client record from an archive database. |
| [UserArchiveLogins](imtserverapi_userarchivelogins.md "UserArchiveLogins") | Returns an array of logins in an archive database for the specified group. |
| [UserRestore](imtserverapi_userrestore.md "UserRestore") | Restore a client record from an archive or a backup database. |
| [NotificationsSend](imtserverapi_notificationssend.md "NotificationsSend") | Sends push notifications to mobile devices. |
| [UserAccountGet](imtserverapi_useraccountget.md "UserAccountGet") | Obtaining a client's trading account by a login. |