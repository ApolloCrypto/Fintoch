# Fintoch 


# 合约初步分析

## 能接受用户转账的合约有

+ WETH.sol
+ InitializableUpgradeabilityproxy.sol
+ BaseAdminUpgradeabilityProxy.sol
+ AdminUpgradeabilityProxy.sol
+ FinotchPool.sol
+ Fintoch Borrow.sol
+ BaseImmutableAdminUpgradeabilityProxy.sol

其中绝大部分都是有关于ERC1967的代理相关的东西，核心点在于FinotchPool和Fintoch Borrow 与业务有关。



## 难点

+ 业务与实际代码建立不了联系
+ 链上部署的合约对用户有隐藏，IinverstmentEarnings
+ FintochPool和FintochBorrow通过IinverstmentEarnings建立起桥梁，但是无法因为上述原因无法跟踪
+ 对于FTH-DCtoken的转入貌似项目没有记录