---
title: RO3 亮相 GDC 2026：腾讯云架构支持百万玩家同服
date: 2026-05-21
description: GDC 2026游戏开发者大会上，RO3开发团队JoyMaker分享了游戏弹性云架构，支持百万级CCU并发，由腾讯云提供技术支持。
---

# RO3 亮相 GDC 2026：腾讯云架构支持百万玩家同服

**2026年5月21日**

在2026年3月于旧金山举办的GDC（Game Developers Conference）大会上，RO3开发团队JoyMaker的技术总监杨超和技术VP耿一婷发表了题为《RO3：支持百万CCU的弹性MMO云架构演进与实践》的演讲。

## 核心亮点

### 百万级并发架构

演讲中透露，RO3采用了**腾讯云**的弹性云架构，目标支持**百万级CCU（Concurrent Concurrent Users，同时在线玩家）**。这一架构经过了从单服务器到水平可扩展跨服架构的演进。

### 关键技术

- **AvatarService集中化**：确保玩家状态在动态迁移过程中的无缝连续性
- **Kubernetes自动伸缩**：基于智能监控的自动化运维系统
- **水平扩展架构**：从单服到跨服架构的演进

### 演讲要点

| 技术 | 说明 |
|------|------|
| 云平台 | 腾讯云（Tencent Cloud） |
| 容器编排 | Kubernetes（K8s） |
| 玩家状态管理 | 集中式AvatarService |
| 弹性伸缩 | 基于遥测数据的自动扩缩容 |
| 目标CCU | 百万级同时在线 |

## 意义

这一技术分享表明：
1. RO3的服务器架构已经经过了大规模压力测试
2. 腾讯云的参与意味着国服将有强大的基础设施支持
3. 百万CCU的目标说明Gravity对RO3的用户规模有很高期待

## 演讲受众定位

该演讲被标记为「高级」级别，目标受众为服务器工程师和技术负责人，内容涵盖MMO后端架构、云原生实践和Kubernetes运维。

> 来源：[GDC Festival of Gaming 2026 议程](https://schedule.gdconf.com/session/ragnarok-online-3-the-evolution-and-practice-of-elastic-mmo-cloud-architecture-supporting-million-ccu-presented-by-tencent-games/917934)
