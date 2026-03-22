# OnServerSynchronized (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Event Interface ](imtgatewaysink.md "Event Interface")/ OnServerSynchronized | [](imtgatewaysink_onserverdisconnect.md "OnServerDisconnect") [](imtgatewaysink_onserversymboladd.md "OnServerSymbolAdd") |
| --- | --- | --- |
| --- | --- |

IMTGatewaySink::OnServerSynchronized
A handler of the event of data synchronization between Gateway API and one of the MetaTrader 5 platform (server) components.
C++
virtual void IMTGatewaySink::OnServerSynchronized( LPCWSTR address, // IP address const UINT type, // component type const UINT64 id // server ID )  
---  
.NET
virtual void CIMTGatewaySink.OnServerSynchronized( string address, // IP address uint type, // component type ulong id // server ID )  
---  
Parameters
address
[in] IP address of the platform component the synchronization has been performed with.
type
[in] Type of the platform component the synchronization has been performed with. The [IMTGatewayAPI::CONNECT_TYPE_TRADE](imtgatewayapi_enum.htm#enconnecttype) (trade server), [IMTGatewayAPI::CONNECT_TYPE_HISTORY](imtgatewayapi_enum.htm#enconnecttype) (history server) and [IMTGatewayAPI::CONNECT_TYPE_BACKUP](imtgatewayapi_enum.htm#enconnecttype) (backup server) values are used to pass the type.
id
[in] ID of the server ([IMTConServer::ID](imtconserver_id.md "Id")) the synchronization has been performed with. This parameter passes 0 when synchronizing with the history or backup server.
Note
Use this handler if the gateway works with additional (not main) trade servers. When working only with the main trade server, it is sufficient to use [IMTGatewaySink::OnGatewayStart](imtgatewaysink_ongatewaystart.md "OnGatewayStart").
The IMTGatewaySink::OnServerSynchronized notification means that Gateway API has synchronized necessary data (user database, trade executions, groups, etc.) with a specified server. After that, you can call the methods of the Gateway API business logic (for example, work with users on a specified server using the [IMTGatewayAPI:User*](imtgatewayapi_userget.md "UserGet") methods).