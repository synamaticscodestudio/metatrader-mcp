# PriceToDouble (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTMath ](smtmath.md "SMTMath") / [ Price Functions ](smtmath_price.md "Price Functions")/ PriceToDouble | [](smtmath_pricetoint.md "PriceToInt") [](smtmath_volume.md "Volume Functions") |
| --- | --- | --- |
| --- | --- |

SMTMath::PriceToDouble
Converting a price from int to double.
C++
static double SMTMath::PriceToDouble( const INT64 value, // Input price UINT digits // Accuracy )  
---  
.NET (Gateway/Manager API)
static double SMTMath.PriceToDouble( long value, // Input price uint digits // Accuracy )  
---  
Parameters
value
[in] A fixed-point input price.
digits
[in] The number of digits after the decimal point in the resulting price.
Return Value
The resulting price.
Note
The value of the digits parameter should not exceed the value of the [MTAPI_PRICE_DIGITS_MAX](smtmath_constants.md "Constants") constant.