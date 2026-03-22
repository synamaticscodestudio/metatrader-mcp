# Users (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface")/ Users | [](imtgatewayapi_tickhistoryreplace.md "TickHistoryReplace") [](imtgatewayapi_usercreate.md "UserCreate") |
| --- | --- | --- |
| --- | --- |

Users
Functions of Gateway API allow accessing the user database on the trade server as well as subscribing and unsubscribing from events connected with changes in this database.
| Functions | Purpose |
| --- | --- |
| --- | --- |
| [UserCreate](imtgatewayapi_usercreate.md "UserCreate") | Create an object of a client record. |
| [UserCreateAccount](imtgatewayapi_usercreate.md "UserCreate") | Create an object of a client's trading account. |
| [UserSubscribe](imtgatewayapi_usersubscribe.md "UserSubscribe") | Subscribe to events associated with changes in the client base. |
| [UserUnsubscribe](imtgatewayapi_userunsubscribe.md "UserUnsubscribe") | Unsubscribe from events associated with changes in the client base. |
| [UserTotal](imtgatewayapi_usertotal.md "UserTotal") | Get the total number of users in groups available to the gateway. |
| [UserGet](imtgatewayapi_userget.md "UserGet") | Get a client record by the login. |
| [UserGetByAccount](imtgatewayapi_usergetbyaccount.md "UserGetByAccount") | Get a client record, which corresponds to the account number in the external trading system. |
| [UserGroup](imtgatewayapi_usergroup.md "UserGroup") | Get the group of a client by the login. |
| [UserLogins](imtgatewayapi_userlogins.md "UserLogins") | Returns an array of logins of the clients who are included in the specified group. |