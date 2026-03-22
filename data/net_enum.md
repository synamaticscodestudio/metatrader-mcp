# Enumerations (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class")/ Enumerations | [](net_constructor.md "Constructor") [](net_connect_disconnect.md "Connect/Disconnect") |
| --- | --- | --- |
| --- | --- |

Enumerations
The MT5WebAPI class contains the following enumerations:
  * [EnCryptModes](net_enum.htm#encryptmodes)
  * [EnPumpModes](net_enum.htm#enpumpmodes)

MT5WebAPI.EnCryptModes
Possible modes of encryption of the data stream exchanged between the Web client and the trade server are enumerate in MT5WebAPI::EnCryptModes.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| CRYPT_MODE_NONE | 0 | Encryption is disabled. |
| CRYPT_MODE_AES | 1 | AES encryption using the 256-bit key in the OFB (Output Feedback) mode. |

This enumeration is used in the [MT5WebAPI.Connect](net_connect.md "Connect") method.
MT5WebAPI.EnPumpModes
Enabling a pumping mode means that the Web client will synchronize the appropriate database of the server with a locally created database. Thus, to obtain information the application can access the local database.
Currently pumping is not available. This feature will be implemented later.  
---  
Possible pumping modes are enumerate in MT5WebAPI::EnPumpModes.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| PUMP_MODE_NONE | 0x00000000 | No data pumping. |

The pumping mode, in which you want to connect, is passed in the parameter of the pumpModes method [MT5WebAPI.Connect](net_connect.md "Connect").