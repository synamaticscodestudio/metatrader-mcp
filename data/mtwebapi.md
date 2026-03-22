# MTWebAPI Class (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP")/ MTWebAPI Class | [](php.md "Protocol Implementation in PHP") [](php_connect_disconnect.md "Connect/Disconnect") |
| --- | --- | --- |
| --- | --- |

MTWebAPI Class
the implementation of protocol in PHP, all the Web API commands are called through the methods of the MTWebAPI class (file mt5_api.php). Description of the methods of this class is divided into the following sections:
  * [Connect/Disconnect](php_connect_disconnect.md "Connect/Disconnect")
  * [Manage Logging](php_logging.md "Manage Logging")
  * [Service Commands](php_service.md "Service Commands")
  * [Common Configuration](php_common.md "Common Configuration")
  * [Timing](php_time.md "Timing")
  * [Groups](php_group.md "Groups")
  * [Symbols](php_symbol.md "Symbols")
  * [Clients](php_user.md "Clients")
  * [Orders](php_order.md "Orders")
  * [Deals](php_deal.md "Deals")
  * [Positions](php_position.md "Positions")
  * [Trade](php_trade.md "Trade")
  * [Mailbox](php_mail.md "Mailbox")
  * [News Event](php_news.md "News Event")
  * [Prices](php_tick.md "Prices")
  * [Custom Commands](php_custom.md "Custom Commands")

To begin using the methods of the MTWebAPI class, just include the mt5_api.php file into your PHP project.  
---  
The Structure of the Protocol Implementation Files
The protocol implementation files are located in the /Examples/PHP/mt5_api/ subfolder of the [Web API installation](installation.md "Setup") directory. It contains the following files:
  * mt5_api.php — the MTWebAPI class that describes calls of the Web API commands.
  * mt5_auth.php — implementation of the authorization process.
  * mt5_common.php — implementation of receiving common configuration.
  * mt5_connect.php — implementation of connection/disconnection of the Web client.
  * mt5_cryptaes256.php — implementation of encryption of data transmitted.
  * mt5_custom.php — implementation of function for sending custom commands.
  * mt5_deal.php — implementation of functions for working with deals.
  * mt5_group.php — implementation of receiving client groups configurations.
  * mt5_history.php — implementation of functions for working with orders.
  * mt5_logger.php — implementation of journal functions.
  * mt5_mail.php — implementation of functions for working with mail.
  * mt5_news.php — implementation of functions for working with news.
  * mt5_ping.php — implementation of function for maintaining of connection.
  * mt5_protocol.php — description of constants and header of messages.
  * mt5_retcode.php — description of return codes.
  * mt5_symbol.php — implementation of receiving symbol configurations.
  * mt5_tick.php — implementation of receiving of price data.
  * mt5_time.php — implementation of receiving time settings.
  * mt5_user.php — implementation of functions for working with users.
  * mt5_utils.php — implementation of common functions.
