// 核心数据结构不再随机生成，而是由固定数据定义
const FACTORIES_DATA = [
    // --- 在这里插入您固定的工厂数据数组 ---
    // 每个工厂对象应该像下面这样，您需要为 Factory 01 到 Factory 34 依次添加。
    // 确保 id 是唯一的，并且 location 和 timezone 是对应的。
    {
        id: "Factory 01",
        location: "Hai Phong, Vietnam", // 完整的英文地点
        timezone: "Asia/Ho_Chi_Minh", // 对应的时区
        established: "Since 2012", // 固定建厂时间
        scale: "50+ workers, 1,200 sqm workshop", // 固定工厂规模
        details: [
            // 这些详情是 Factory 01 独有的固定详情
            { item: "原料来源 (Hair Source)", desc: "80% Single Donor, part village concentrated acquisition", desc_cn: "80% 单供体，部分村落集中收购" },
            { item: "供体人群特征 (Donor Profile)", desc: "Rural young women, natural hair, no chemical straightening", desc_cn: "乡村年轻女性，自然发质，无化学拉直" },
            { item: "主要发质 (Hair Grade)", desc: "Raw virgin hair, cuticles mostly intact, softer hair", desc_cn: "原生发，毛鳞片较完整，发质较软" },
            { item: "发质颜色 (Natural Color)", desc: "Natural dark black, slight color difference", desc_cn: "自然黑偏深，色差较小" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 27 Light Brown", desc_cn: "可漂到 27 号浅棕" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Natural Straight, Slight Wave, Silky Straight Water Wave", desc_cn: "直发、自然波浪、大波浪、深波浪、水波浪" }, // Adjusted to match previous response
            { item: "处理工艺 (Processing)", desc: "No acid wash, light steam for curls", desc_cn: "无酸洗，卷度轻蒸" },
            { item: "月产量 (Monthly Capacity)", desc: "~300 kg per month", desc_cn: "每月约 300 公斤" }, // 固定月产量
            { item: "供货稳定性 (Supply Stability)", desc: "Stable supply, supports small batch drops", desc_cn: "稳定供货，支持小批 Drop" },
            { item: "质量检测 (Quality Control)", desc: "Raw material initial inspection + finished product spot check", desc_cn: "原料初检 + 成品抽检" },
            { item: "认证资质 (Certifications)", desc: "Simple real-shot videos available", desc_cn: "可提供简单实拍视频" },
            { item: "客户人群 (Main Clients)", desc: "Studio owners, small to medium e-commerce wholesalers", desc_cn: "工作室、批发中小电商卖家" },
            { item: "售后保障 (After-Sales)", desc: "Supports exchange within 7 days", desc_cn: "7 天内支持换货" },
            { item: "实拍证明 (Verification)", desc: "Donor collection process videos", desc_cn: "供体收集过程视频" },
            { item: "特别说明 (Special Notes)", desc: "Natural color differences exist, slight batch variations", desc_cn: "色差自然存在，批次略有差异" }
        ]
    },
    {
        id: "Factory 02",
        location: "Qingdao, China",
        timezone: "Asia/Shanghai",
        established: "Since 2018",
        scale: "40+ workers, 800 sqm processing point",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Southeast Asian mixed donors, some domestic recycling", desc_cn: "东南亚混供体，部分国内回收" },
            { item: "供体人群特征 (Donor Profile)", desc: "Multi-source mixed collection, small amount of pure donors", desc_cn: "多来源混采，少量纯供体" },
            { item: "主要发质 (Hair Grade)", desc: "Natural hair, average elasticity, suitable for curly hair", desc_cn: "自然发，弹性一般，适合做卷发" },
            { item: "发质颜色 (Natural Color)", desc: "Dark brown to natural black, uniform color", desc_cn: "深棕到自然黑，色泽均匀" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 613, but requires professional care", desc_cn: "可漂到 613，但需专业养护" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Natural Straight, Natural Wave, Body Wave", desc_cn: "直发、自然波、大波浪" },
            { item: "处理工艺 (Processing)", desc: "Some curls require secondary steaming for setting", desc_cn: "部分卷度需二次蒸煮定型" },
            { item: "月产量 (Monthly Capacity)", desc: "~200 kg per month", desc_cn: "每月约 200 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Flexible production, suitable for quick shipments", desc_cn: "产量灵活，适合快速出货" },
            { item: "质量检测 (Quality Control)", desc: "Single spot check, random sampling", desc_cn: "单次抽检，随机抽样" },
            { item: "认证资质 (Certifications)", desc: "Warehouse video support", desc_cn: "支持库房视频" },
            { item: "客户人群 (Main Clients)", desc: "Price-sensitive market, single-piece e-commerce sellers", desc_cn: "电商零售商，大型批发商" }, // Adjusted to match previous response
            { item: "售后保障 (After-Sales)", desc: "Supports exchange upon arrival", desc_cn: "到货后支持调换" },
            { item: "实拍证明 (Verification)", desc: "In-stock real shots, warehouse available for connection", desc_cn: "现货实拍，仓库可连线" },
            { item: "特别说明 (Special Notes)", desc: "Mixed donor batches vary, slight texture differences", desc_cn: "混供体批次不同，纹理差异略大" }
        ]
    },
    {
        id: "Factory 03",
        location: "Ho Chi Minh City, Vietnam",
        timezone: "Asia/Ho_Chi_Minh",
        established: "Since 2010",
        scale: "120+ workers, 3,000 sqm large workshop",
        details: [
            { item: "原料来源 (Hair Source)", desc: "100% Single Donor, long-term fixed villages", desc_cn: "100% 单供体，长期固定村落" },
            { item: "供体人群特征 (Donor Profile)", desc: "Rural women, no perm/dye, healthy diet", desc_cn: "农村女性，无烫染，饮食健康" },
            { item: "主要发质 (Hair Grade)", desc: "Virgin hair, complete cuticle, smooth and shiny", desc_cn: "处女发，毛鳞片完整，顺滑有光泽" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black to dark brown, small color difference", desc_cn: "自然黑至深棕，色差小" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 613 Blonde", desc_cn: "可漂到 613 浅金色" },
            { item: "可定制花型 (Curl/Style Options)", desc: "All curl types supported, from straight to deep wave", desc_cn: "全卷度支持，顺直到深波均可" },
            { item: "处理工艺 (Processing)", desc: "Purely hand-sorted, no chemical washing", desc_cn: "纯手工分拣，无任何化学洗涤" },
            { item: "月产量 (Monthly Capacity)", desc: "~800 kg per month", desc_cn: "每月约 800 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Large quantity stable supply, supports pre-orders", desc_cn: "大批量稳定供货，支持预定" },
            { item: "质量检测 (Quality Control)", desc: "Triple QC, full inspection from donor to finished product", desc_cn: "三重质检，供体到成品全检" },
            { item: "认证资质 (Certifications)", desc: "Internal QC reports + donor on-site videos", desc_cn: "内部质检报告+供体现场视频" },
            { item: "客户人群 (Main Clients)", desc: "High-end salons, repeat wholesale buyers", desc_cn: "高端沙龙、批发回购客户" },
            { item: "售后保障 (After-Sales)", desc: "Refund or re-shipment available after video proof", desc_cn: "提供视频证据后支持退款或补发" },
            { item: "实拍证明 (Verification)", desc: "Full donor cutting process available for connection", desc_cn: "供体剪发全过程可连线" },
            { item: "特别说明 (Special Notes)", desc: "Due to scarcity of donors, some specifications require advance booking", desc_cn: "因供体稀缺，部分规格需提前预定" }
        ]
    },
    {
        id: "Factory 04",
        location: "Guangdong, China",
        timezone: "Asia/Shanghai",
        established: "Since 2019",
        scale: "20 workers small workshop, mainly hand-processed",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Southeast Asian recycled hair, mainly mixed donors", desc_cn: "东南亚回收发，混供体为主" },
            { item: "供体人群特征 (Donor Profile)", desc: "Wide age range, some with chemical straightening history", desc_cn: "年龄跨度大，部分有化学拉直历史" },
            { item: "主要发质 (Hair Grade)", desc: "Soft but average curl retention", desc_cn: "柔顺但卷度持久性一般" },
            { item: "发质颜色 (Natural Color)", desc: "Dark black, some with natural brown tones", desc_cn: "深黑偏硬，部分带自然棕调" },
            { item: "可漂染程度 (Bleach Level)", desc: "Recommended up to 27, deep bleaching not recommended", desc_cn: "建议漂到 27，不推荐深漂" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Natural Straight, Medium to Short Wave", desc_cn: "自然直发、中短波浪" },
            { item: "处理工艺 (Processing)", desc: "Basic bleaching and washing, curls secondary steamed", desc_cn: "基本漂洗，卷度二次蒸煮" },
            { item: "月产量 (Monthly Capacity)", desc: "~100 kg per month", desc_cn: "每月约 100 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Batch fluctuations are large, suitable for temporary orders", desc_cn: "批次波动大，适合临时单" },
            { item: "质量检测 (Quality Control)", desc: "Experienced quality inspection, random sampling", desc_cn: "经验质检，随机挑样" },
            { item: "认证资质 (Certifications)", desc: "Only in-stock real shots supported", desc_cn: "仅支持现货实拍" },
            { item: "客户人群 (Main Clients)", desc: "Low-priced market, short-term high volume", desc_cn: "低客单价市场、短期走量" },
            { item: "售后保障 (After-Sales)", desc: "Supports exchange, refunds based on situation", desc_cn: "支持换货，退款视情况" },
            { item: "实拍证明 (Verification)", desc: "Partial donor shots", desc_cn: "部分供体拍摄" },
            { item: "特别说明 (Special Notes)", desc: "Not suitable for high-end customization scenarios", desc_cn: "不适合高端定制场景" }
        ]
    },
    {
        id: "Factory 05",
        location: "Lang Son, Vietnam",
        timezone: "Asia/Ho_Chi_Minh",
        established: "Since 2014",
        scale: "60+ workers, 1,500 sqm workshop",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Mainly single donor, supplemented by village acquisition", desc_cn: "单供体为主，村落收购为辅" },
            { item: "供体人群特征 (Donor Profile)", desc: "Young female donors with thick, resilient hair", desc_cn: "年轻女性发质粗，发丝韧性好" },
            { item: "主要发质 (Hair Grade)", desc: "Coarse straight hair, suitable for long hair, straight products", desc_cn: "粗直发，适合做长发、直发产品" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black to brown, good luster", desc_cn: "自然黑到棕，光泽度好" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 613, but tends to be yellow", desc_cn: "可漂到 613，但偏黄" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Long Straight, Natural Wave, Water Wave", desc_cn: "长直、自然波、水波卷" },
            { item: "处理工艺 (Processing)", desc: "No acid wash, light steam for curl setting", desc_cn: "无酸洗，轻蒸卷度定型" },
            { item: "月产量 (Monthly Capacity)", desc: "~400 kg per month", desc_cn: "每月约 400 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Flexible inventory, supports large order drops", desc_cn: "库存灵活，支持大单 Drop" },
            { item: "质量检测 (Quality Control)", desc: "Two-stage spot check, donor + finished product", desc_cn: "两重抽检，供体+成品" },
            { item: "认证资质 (Certifications)", desc: "Donor cutting videos support for some batches", desc_cn: "供体剪发视频支持部分批次" },
            { item: "客户人群 (Main Clients)", desc: "Salons, wig wholesalers", desc_cn: "沙龙、假发批发卖家" },
            { item: "售后保障 (After-Sales)", desc: "Supports exchange, no refunds", desc_cn: "支持换货，不支持退款" },
            { item: "实拍证明 (Verification)", desc: "Village donor shots", desc_cn: "村落供体拍摄" },
            { item: "特别说明 (Special Notes)", desc: "High cost-performance for long hair, suitable for trial orders", desc_cn: "长发性价比高，适合做试单" }
        ]
    },
    {
        id: "Factory 06",
        location: "Thanh Hoa, Vietnam",
        timezone: "Asia/Ho_Chi_Minh",
        established: "Since 2016",
        scale: "70 workers, 1,800 sqm workshop",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Single donor, some seasonal acquisition", desc_cn: "单供体，部分季节性收购" },
            { item: "供体人群特征 (Donor Profile)", desc: "Rural women, hair is finer and softer", desc_cn: "农村女性，头发偏细软" },
            { item: "主要发质 (Hair Grade)", desc: "Fine and soft virgin hair, excellent curl shaping", desc_cn: "细软处女发，卷度塑形佳" },
            { item: "发质颜色 (Natural Color)", desc: "Mainly natural black, less dark brown", desc_cn: "自然黑发为主，深棕较少" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 60 light blonde, maintains softness", desc_cn: "可漂 60 号浅色，维持柔顺" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Straight, Natural Wave, Small Water Wave", desc_cn: "直发、自然波浪、小水波" },
            { item: "处理工艺 (Processing)", desc: "Light steam for curls, no acid wash", desc_cn: "轻蒸卷度，不用酸洗" },
            { item: "月产量 (Monthly Capacity)", desc: "~350 kg per month", desc_cn: "每月约 350 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Requires advance booking for some lengths", desc_cn: "需提前预定部分长度" },
            { item: "质量检测 (Quality Control)", desc: "Donor screening + finished product spot check", desc_cn: "供体筛选 + 成品抽检" },
            { item: "认证资质 (Certifications)", desc: "Internal QC videos available", desc_cn: "内部 QC 视频可提供" },
            { item: "客户人群 (Main Clients)", desc: "Customization clients, long-term salon repeat buyers", desc_cn: "定制客户、沙龙长期回购" },
            { item: "售后保障 (After-Sales)", desc: "Re-shipment available for issues", desc_cn: "有问题可补发" },
            { item: "实拍证明 (Verification)", desc: "Cutting and factory packaging videos", desc_cn: "剪发和工厂打包视频" },
            { item: "特别说明 (Special Notes)", desc: "Fine and soft hair suitable for light styles, easy to dye", desc_cn: "细软发适合轻盈款式，易染色" }
        ]
    },
    {
        id: "Factory 07",
        location: "Henan, China",
        timezone: "Asia/Shanghai",
        established: "Since 2017",
        scale: "35 workers, single-layer processing area",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Domestic recycled hair and Southeast Asian mixed supply", desc_cn: "国内回收发与东南亚混供" },
            { item: "供体人群特征 (Donor Profile)", desc: "Dispersed sources, varying quality", desc_cn: "来源分散，品质差异大" },
            { item: "主要发质 (Hair Grade)", desc: "Mainly straight, some with impurities", desc_cn: "以顺直为主，部分带杂质" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black, occasionally reddish", desc_cn: "自然黑，偶有偏红" },
            { item: "可漂染程度 (Bleach Level)", desc: "Recommended up to 27, deep bleaching prone to damage", desc_cn: "建议漂 27，深漂易损伤" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Short Straight, Medium Wave", desc_cn: "短直、中波" },
            { item: "处理工艺 (Processing)", desc: "Curls mostly secondary steamed", desc_cn: "卷度多为二次蒸煮" },
            { item: "月产量 (Monthly Capacity)", desc: "~150 kg per month", desc_cn: "每月约 150 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Can do quick orders, suitable for temporary needs", desc_cn: "可做快单，适合临时需求" },
            { item: "质量检测 (Quality Control)", desc: "Random sampling per batch", desc_cn: "按批次随机抽样" },
            { item: "认证资质 (Certifications)", desc: "Only warehouse real shots", desc_cn: "仅仓库实拍" },
            { item: "客户人群 (Main Clients)", desc: "Low-price fast-moving market, small e-commerce stores", desc_cn: "低价快销市场、电商小店" },
            { item: "售后保障 (After-Sales)", desc: "Exchange only, no refunds", desc_cn: "仅换货，无退" },
            { item: "实拍证明 (Verification)", desc: "In-stock warehouse videos", desc_cn: "现货库房视频" },
            { item: "特别说明 (Special Notes)", desc: "Dispersed donors, batch differences exist", desc_cn: "供体分散，批次差异存在" }
        ]
    },
    {
        id: "Factory 08",
        location: "Nam Dinh, Vietnam",
        timezone: "Asia/Ho_Chi_Minh",
        established: "Since 2011",
        scale: "90 workers, large sorting center",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Long-term fixed village donors", desc_cn: "长期固定村落供体" },
            { item: "供体人群特征 (Donor Profile)", desc: "Concentrated female donors, no chemical treatment", desc_cn: "女性供体集中，无化学处理" },
            { item: "主要发质 (Hair Grade)", desc: "High-end virgin hair, complete cuticle, extremely easy to manage", desc_cn: "高端处女发，毛鳞片完整，极易打理" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black to dark brown, natural luster", desc_cn: "自然黑到深棕，光泽自然" },
            { item: "可漂染程度 (Bleach Level)", desc: "613 Blonde with no pressure", desc_cn: "613 浅金无压力" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Straight, Natural Wave, Body Wave, Deep Wave", desc_cn: "直发、自然波、大波、深波" },
            { item: "处理工艺 (Processing)", desc: "Purely hand-sorted, no chemical residue", desc_cn: "纯手工分拣，无任何化学残留" },
            { item: "月产量 (Monthly Capacity)", desc: "~700 kg per month", desc_cn: "每月约 700 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Stable wholesale, supports pre-order locking", desc_cn: "稳定批发，支持预定锁货" },
            { item: "质量检测 (Quality Control)", desc: "Raw material sorting + double drawn process + finished product inspection", desc_cn: "原料分拣 + 双抽工艺 + 成品检测" },
            { item: "认证资质 (Certifications)", desc: "Full process video, cutting visible", desc_cn: "全流程视频，可看剪发" },
            { item: "客户人群 (Main Clients)", desc: "High-end customization, European and American boutique lines", desc_cn: "高端定制、欧美精品线" },
            { item: "售后保障 (After-Sales)", desc: "Re-shipment or exchange available", desc_cn: "可补发或换货" },
            { item: "实拍证明 (Verification)", desc: "Donor, full workshop process", desc_cn: "供体、车间全过程" },
            { item: "特别说明 (Special Notes)", desc: "Large specifications require advance order locking", desc_cn: "大规格需提前锁单" }
        ]
    },
    {
        id: "Factory 09",
        location: "Hunan, China",
        timezone: "Asia/Shanghai",
        established: "Since 2015",
        scale: "50 workers medium-sized workshop",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Domestic recycling + small amount of Southeast Asian procurement", desc_cn: "国内回收 + 少量东南亚采购" },
            { item: "供体人群特征 (Donor Profile)", desc: "Mixed hair quality, slightly larger color difference", desc_cn: "发质混杂，色差略大" },
            { item: "主要发质 (Hair Grade)", desc: "Mostly straight hair, suitable for short hair", desc_cn: "直发居多，适合做短发" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black, small amount of dark brown", desc_cn: "自然黑，少量深棕" },
            { item: "可漂染程度 (Bleach Level)", desc: "Light bleaching can reach 27", desc_cn: "浅漂可达 27" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Natural Straight, Short Water Wave", desc_cn: "自然直、短水波" },
            { item: "处理工艺 (Processing)", desc: "Light bleaching + steamed curls", desc_cn: "轻漂 + 蒸煮卷度" },
            { item: "月产量 (Monthly Capacity)", desc: "~200 kg per month", desc_cn: "每月约 200 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Larger batch differences, flexible supply", desc_cn: "批次差异较大，灵活供货" },
            { item: "质量检测 (Quality Control)", desc: "Basic spot checks", desc_cn: "基本抽检" },
            { item: "认证资质 (Certifications)", desc: "Warehouse videos can be provided", desc_cn: "库房视频可发" },
            { item: "客户人群 (Main Clients)", desc: "Price-sensitive fast-moving market", desc_cn: "价格敏感型快销市场" },
            { item: "售后保障 (After-Sales)", desc: "Supports exchange only", desc_cn: "仅支持调换" },
            { item: "实拍证明 (Verification)", desc: "In-stock photos available", desc_cn: "现货可拍" },
            { item: "特别说明 (Special Notes)", desc: "Short hair offers high cost-performance for volume", desc_cn: "短发走量性价比高" }
        ]
    },
    {
        id: "Factory 10",
        location: "Hanoi, Vietnam",
        timezone: "Asia/Ho_Chi_Minh",
        established: "Since 2013",
        scale: "100 workers standard assembly line",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Mainly single donor, small batches acquired from villages", desc_cn: "单供体为主，少量村落整批收购" },
            { item: "供体人群特征 (Donor Profile)", desc: "Young Vietnamese women, clean diet", desc_cn: "越南年轻女性，饮食干净" },
            { item: "主要发质 (Hair Grade)", desc: "Virgin hair, good hair toughness, strong tensile strength", desc_cn: "处女发，发质韧性好，拉力强" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black, occasionally brown tones", desc_cn: "自然黑，偶有棕调" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 613 Blonde", desc_cn: "可漂到 613 浅金" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Straight, Natural Wave, Deep Wave, Spiral Curl", desc_cn: "直发、自然波、深波、螺旋卷" },
            { item: "处理工艺 (Processing)", desc: "No acid wash, light steam for curls", desc_cn: "无酸洗，卷度轻蒸" },
            { item: "月产量 (Monthly Capacity)", desc: "~600 kg per month", desc_cn: "每月约 600 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Large orders can be locked, some in-stock items ship quickly", desc_cn: "大单可锁，现货部分快速出" },
            { item: "质量检测 (Quality Control)", desc: "Three-stage quality inspection", desc_cn: "三道工序质检" },
            { item: "认证资质 (Certifications)", desc: "Factory cutting, workshop packaging available for connection", desc_cn: "工厂剪发、车间打包可连线" },
            { item: "客户人群 (Main Clients)", desc: "Mid-to-high-end salons, overseas wig stores", desc_cn: "中高端沙龙、海外假发店" },
            { item: "售后保障 (After-Sales)", desc: "Supports re-shipment", desc_cn: "支持补发" },
            { item: "实拍证明 (Verification)", desc: "Full donor cutting process available", desc_cn: "供体剪发全过程可提供" },
            { item: "特别说明 (Special Notes)", desc: "Recommend booking popular specifications 2 weeks in advance", desc_cn: "建议提前 2 周预定热销规格" }
        ]
    },
    {
        id: "Factory 11",
        location: "Thanh Hoa, Vietnam",
        timezone: "Asia/Ho_Chi_Minh",
        established: "Since 2017",
        scale: "65 workers, 1,800 sqm workshop",
        details: [
            { item: "原料来源 (Hair Source)", desc: "90% Single Donor, part village concentrated acquisition", desc_cn: "90% 单供体，部分村落集中采收" },
            { item: "供体人群特征 (Donor Profile)", desc: "Rural women with fine, soft, naturally straight hair", desc_cn: "乡村女性发质细软，自然顺直" },
            { item: "主要发质 (Hair Grade)", desc: "Fine and soft virgin hair, high smoothness", desc_cn: "细软处女发，柔顺度高" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black to dark brown, natural luster", desc_cn: "自然黑偏深棕，光泽自然" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 60 Light Blonde", desc_cn: "可漂到 60 号浅色" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Natural Straight, Slight Wave, Small Water Wave", desc_cn: "自然直、轻微波浪、小水波" },
            { item: "处理工艺 (Processing)", desc: "No acid wash, light steam for curls", desc_cn: "无酸洗，轻蒸卷度" },
            { item: "月产量 (Monthly Capacity)", desc: "~400 kg per month", desc_cn: "每月约 400 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Requires advance booking for some lengths", desc_cn: "需要提前预定部分长度" },
            { item: "质量检测 (Quality Control)", desc: "Raw material screening + finished product spot check", desc_cn: "原料筛选 + 成品抽检" },
            { item: "认证资质 (Certifications)", desc: "Cutting and packaging videos available", desc_cn: "可提供剪发和打包视频" },
            { item: "客户人群 (Main Clients)", desc: "High-end customization, personal studio repeat buyers", desc_cn: "高端定制、个人工作室回购" },
            { item: "售后保障 (After-Sales)", desc: "Re-shipment or exchange available for issues", desc_cn: "有问题可补发或调换" },
            { item: "实拍证明 (Verification)", desc: "Donor cutting + workshop packaging", desc_cn: "供体剪发+车间打包" },
            { item: "特别说明 (Special Notes)", desc: "Fine and soft hair suitable for light styles", desc_cn: "细软发适合轻盈风格" }
        ]
    },
    {
        id: "Factory 12",
        location: "Henan, China",
        timezone: "Asia/Shanghai",
        established: "Since 2016",
        scale: "50 workers medium-sized processing point",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Domestic recycled hair + Southeast Asian mixed donors", desc_cn: "国内回收发 + 东南亚混供体" },
            { item: "供体人群特征 (Donor Profile)", desc: "Dispersed sources, some donors with wide age range", desc_cn: "来源分散，部分供体年龄跨度大" },
            { item: "主要发质 (Hair Grade)", desc: "Mostly straight hair, occasionally wavy texture", desc_cn: "直发居多，偶有波浪感" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black, large color difference per batch", desc_cn: "自然黑，批次色差大" },
            { item: "可漂染程度 (Bleach Level)", desc: "Recommended light bleaching to 27, deep bleaching prone to damage", desc_cn: "建议浅漂至 27，深漂易损" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Short Straight, Medium Wave", desc_cn: "短直、中波" },
            { item: "处理工艺 (Processing)", desc: "Secondary steaming for curls", desc_cn: "二次蒸煮卷度" },
            { item: "月产量 (Monthly Capacity)", desc: "~200 kg per month", desc_cn: "每月约 200 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Flexible supply, batch differences exist", desc_cn: "灵活供货，批次差异存在" },
            { item: "质量检测 (Quality Control)", desc: "Random spot check", desc_cn: "随机抽检" },
            { item: "认证资质 (Certifications)", desc: "Warehouse video available", desc_cn: "库房视频可提供" },
            { item: "客户人群 (Main Clients)", desc: "Low-price fast-moving market, small e-commerce", desc_cn: "低价快销市场、小型电商" },
            { item: "售后保障 (After-Sales)", desc: "Supports exchange within 7 days of arrival", desc_cn: "到货 7 天内支持换货" },
            { item: "实拍证明 (Verification)", desc: "In-stock warehouse available for connection", desc_cn: "现货库房可连线" },
            { item: "特别说明 (Special Notes)", desc: "Not recommended for high-end dyeing and bleaching", desc_cn: "不推荐用于高端染漂" }
        ]
    },
    {
        id: "Factory 13",
        location: "Nam Dinh, Vietnam",
        timezone: "Asia/Ho_Chi_Minh",
        established: "Since 2011",
        scale: "85 workers, village sorting center",
        details: [
            { item: "原料来源 (Hair Source)", desc: "100% Single Donor, stable donor supply", desc_cn: "100% 单供体，供体稳定" },
            { item: "供体人群特征 (Donor Profile)", desc: "Young women, no perm/dye records", desc_cn: "年轻女性，无烫染记录" },
            { item: "主要发质 (Hair Grade)", desc: "Virgin hair, smooth strands, excellent curl shaping", desc_cn: "处女发，发丝顺滑，卷度塑形佳" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black to dark brown, uniform color", desc_cn: "自然黑到深棕，色泽均匀" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 613 Blonde", desc_cn: "可漂 613 浅金" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Natural Straight, Natural Wave, Body Wave, Deep Wave", desc_cn: "自然直、自然波、大波、深波" },
            { item: "处理工艺 (Processing)", desc: "Purely hand-made, no chemical treatment", desc_cn: "纯手工，无化学处理" },
            { item: "月产量 (Monthly Capacity)", desc: "~600 kg per month", desc_cn: "每月约 600 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Large orders can be locked in advance", desc_cn: "大单可提前锁货" },
            { item: "质量检测 (Quality Control)", desc: "Triple QC, sorting + spot check", desc_cn: "三重质检，分拣+抽检" },
            { item: "认证资质 (Certifications)", desc: "Donor videos, QC process available", desc_cn: "供体视频、质检过程可提供" },
            { item: "客户人群 (Main Clients)", desc: "High-end salons, European and American boutique buyers", desc_cn: "高端沙龙、欧美精品买家" },
            { item: "售后保障 (After-Sales)", desc: "Supports exchange or re-shipment", desc_cn: "支持换货或补发" },
            { item: "实拍证明 (Verification)", desc: "Donor collection + sorting videos", desc_cn: "供体收集+分拣视频" },
            { item: "特别说明 (Special Notes)", desc: "Some long hair specifications require advance booking", desc_cn: "部分长发规格需预定" }
        ]
    },
    {
        id: "Factory 14",
        location: "Shandong, China",
        timezone: "Asia/Shanghai",
        established: "Since 2015",
        scale: "60 workers, 1,000 sqm workshop",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Mainly domestic recycled, small amount of Southeast Asian mixed", desc_cn: "国内回收为主，少量东南亚混供" },
            { item: "供体人群特征 (Donor Profile)", desc: "Wide age range of donors, some chemically permed/dyed", desc_cn: "供体年龄跨度大，部分化学烫染" },
            { item: "主要发质 (Hair Grade)", desc: "Mainly straight, average elasticity", desc_cn: "顺直为主，弹性一般" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black, some reddish tones locally", desc_cn: "自然黑，局部偏红" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 27 Light Brown", desc_cn: "可漂 27 浅棕" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Natural Straight, Light Wave", desc_cn: "自然直、轻波浪" },
            { item: "处理工艺 (Processing)", desc: "Secondary steaming", desc_cn: "二次蒸煮" },
            { item: "月产量 (Monthly Capacity)", desc: "~250 kg per month", desc_cn: "每月约 250 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Batch fluctuations, suitable for quick orders", desc_cn: "批次波动，适合快单" },
            { item: "质量检测 (Quality Control)", desc: "Experienced spot check", desc_cn: "经验抽检" },
            { item: "认证资质 (Certifications)", desc: "Warehouse available for live shooting", desc_cn: "仓库可连线拍摄" },
            { item: "客户人群 (Main Clients)", desc: "Price-sensitive fast-moving customers", desc_cn: "价格敏感型快销客户" },
            { item: "售后保障 (After-Sales)", desc: "Supports exchange, no refunds", desc_cn: "支持换货，不支持退款" },
            { item: "实拍证明 (Verification)", desc: "In-stock warehouse real shots", desc_cn: "现货库房实拍" },
            { item: "特别说明 (Special Notes)", desc: "Suitable for mid-to-low-end quick-moving orders", desc_cn: "适合中低端快销订单" }
        ]
    },
    {
        id: "Factory 15",
        location: "Ha Giang, Vietnam",
        timezone: "Asia/Ho_Chi_Minh",
        established: "Since 2014",
        scale: "75 workers, direct village sourcing",
        details: [
            { item: "原料来源 (Hair Source)", desc: "100% Single Donor", desc_cn: "100% 单供体" },
            { item: "供体人群特征 (Donor Profile)", desc: "Northern mountain women, healthy diet", desc_cn: "北部山区女性，饮食健康" },
            { item: "主要发质 (Hair Grade)", desc: "Coarse straight hair, strong resilience", desc_cn: "粗直发，韧性强" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black", desc_cn: "自然黑" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 60, tends to be yellow", desc_cn: "可漂到 60 号，偏黄" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Long Straight, Natural Wave", desc_cn: "长直、自然波" },
            { item: "处理工艺 (Processing)", desc: "No acid wash, light steam for setting", desc_cn: "无酸洗，轻蒸定型" },
            { item: "月产量 (Monthly Capacity)", desc: "~450 kg per month", desc_cn: "每月约 450 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Long-term stable supply", desc_cn: "长期稳定供货" },
            { item: "质量检测 (Quality Control)", desc: "Donor initial inspection + finished product spot check", desc_cn: "供体初检+成品抽检" },
            { item: "认证资质 (Certifications)", desc: "Village cutting videos available", desc_cn: "村落剪发视频可提供" },
            { item: "客户人群 (Main Clients)", desc: "Salons, wholesalers", desc_cn: "沙龙店、批发商" },
            { item: "售后保障 (After-Sales)", desc: "Supports exchange", desc_cn: "支持换货" },
            { item: "实拍证明 (Verification)", desc: "Donor, packaging site shots", desc_cn: "供体、打包现场拍摄" },
            { item: "特别说明 (Special Notes)", desc: "High cost-performance for long straight hair", desc_cn: "长直发性价比高" }
        ]
    },
    {
        id: "Factory 16",
        location: "Fujian, China",
        timezone: "Asia/Shanghai",
        established: "Since 2019",
        scale: "30 workers small workshop",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Southeast Asian mixed donors", desc_cn: "东南亚混供体" },
            { item: "供体人群特征 (Donor Profile)", desc: "Dispersed sources, some donors traceable", desc_cn: "来源分散，部分供体可逆向追溯" },
            { item: "主要发质 (Hair Grade)", desc: "Mainly straight hair, curls require steaming", desc_cn: "直发为主，卷度需蒸煮" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black, slightly coarse", desc_cn: "自然黑，略偏粗" },
            { item: "可漂染程度 (Bleach Level)", desc: "Light bleaching can reach 27", desc_cn: "浅漂可达 27" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Short Straight, Medium Wave", desc_cn: "短直、中波" },
            { item: "处理工艺 (Processing)", desc: "Secondary steaming", desc_cn: "二次蒸煮" },
            { item: "月产量 (Monthly Capacity)", desc: "~120 kg per month", desc_cn: "每月约 120 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Flexible supply", desc_cn: "供货灵活" },
            { item: "质量检测 (Quality Control)", desc: "Random batch spot check", desc_cn: "批次随机抽检" },
            { item: "认证资质 (Certifications)", desc: "Warehouse video available for connection", desc_cn: "仓库视频可连线" },
            { item: "客户人群 (Main Clients)", desc: "E-commerce low-price customers", desc_cn: "电商低客单价客户" },
            { item: "售后保障 (After-Sales)", desc: "Supports exchange", desc_cn: "支持换货" },
            { item: "实拍证明 (Verification)", desc: "In-stock warehouse videos", desc_cn: "库房现货视频" },
            { item: "特别说明 (Special Notes)", desc: "Not recommended for repeated processing after deep bleaching", desc_cn: "不建议深漂后反复加工" }
        ]
    },
    
    {
    id: "Factory 17",
        location: "xuchang, china", // 完整的英文地点
        timezone: "Asia/Shanghai", // 对应的时区
        established: "Since 2015", // 固定建厂时间
        scale: "100+ workers, 2,500 sqm workshop", // 固定工厂规模
        details: [
            { item: "原料来源 (Hair Source)", desc: "100% Single Donor, Direct Collection", desc_cn: "100% 单供体，直接收集" },
            { item: "供体人群特征 (Donor Profile)", desc: "Rural women, no chemical treatment, Vietnamese", desc_cn: "乡村女性，无化学处理，越南人" },
            { item: "主要发质 (Hair Grade)", desc: "Raw virgin hair, full cuticle, unprocessed", desc_cn: "原生处女发，毛鳞片完整，未加工" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black to brown, slight natural variation", desc_cn: "自然黑到棕色，可能有轻微自然色差" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 613 Blonde", desc_cn: "可漂到 613 浅金色" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Straight, Natural Wave, Body Wave, Deep Wave, Loose Wave", desc_cn: "直发、自然波浪、大波浪、深波浪、水波浪" },
            { item: "处理工艺 (Processing)", desc: "No acid wash, No silicone, Gentle steam only for curls", desc_cn: "无酸洗、无硅油，仅对卷度做轻蒸处理" },
            { item: "月产量 (Monthly Capacity)", desc: "~550 kg per month", desc_cn: "每月约 550 公斤" }, // 固定月产量
            { item: "供货稳定性 (Supply Stability)", desc: "Small batch drops only to ensure quality consistency", desc_cn: "仅小批量出货，保证品质一致性" },
            { item: "质量检测 (Quality Control)", desc: "3-step QC: Raw sorting → Double drawn → Final inspection", desc_cn: "三步质检：原料分拣 → 双抽工艺 → 最终检验" },
            { item: "认证资质 (Certifications)", desc: "Internal QC videos available, no industrial chemical certificates for raw hair", desc_cn: "可提供内部质检视频，原生发无工业化学证书" },
            { item: "客户人群 (Main Clients)", desc: "Premium salon owners, wig makers, repeat wholesale buyers", desc_cn: "高端沙龙店主、假发定制师、批发回购客户" },
            { item: "售后保障 (After-Sales)", desc: "Video proof required; refund or exchange policy available", desc_cn: "需提供视频证据，支持退款或补发" },
            { item: "实拍证明 (Verification)", desc: "donor cutting video, random batch test available", desc_cn: "可提供工厂直播、供体剪发视频、随机抽检" },
            { item: "特别说明 (Special Notes)", desc: "Natural color difference may occur; we do not guarantee industrial-level color uniformity", desc_cn: "每批可能存在自然色差，不保证工业级颜色一致性" }
        ]
     },
    {
        id: "Factory 18",
        location: "Thai Nguyen, Vietnam",
        timezone: "Asia/Ho_Chi_Minh",
        established: "Since 2013",
        scale: "90 workers, standardized assembly line",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Single donor, village concentrated acquisition", desc_cn: "单供体，村落集中收购" },
            { item: "供体人群特征 (Donor Profile)", desc: "Young donors, no perm/dye", desc_cn: "供体年轻，无染烫" },
            { item: "主要发质 (Hair Grade)", desc: "Virgin hair, soft and smooth strands", desc_cn: "处女发，发丝柔软顺滑" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black to brown", desc_cn: "自然黑偏棕" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 613 Blonde", desc_cn: "可漂 613 浅金" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Natural Straight, Natural Wave, Deep Wave", desc_cn: "自然直、自然波、深波" },
            { item: "处理工艺 (Processing)", desc: "Purely hand-made, no acid wash", desc_cn: "纯手工，无酸洗" },
            { item: "月产量 (Monthly Capacity)", desc: "~600 kg per month", desc_cn: "每月约 600 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Stable wholesale, supports large order locking", desc_cn: "稳定批发，支持大单锁货" },
            { item: "质量检测 (Quality Control)", desc: "Raw material sorting + double drawn process", desc_cn: "原料分拣+双抽工艺" },
            { item: "认证资质 (Certifications)", desc: "Factory videos available for connection", desc_cn: "工厂视频可连线" },
            { item: "客户人群 (Main Clients)", desc: "High-end customization, overseas boutique buyers", desc_cn: "高端定制、海外精品买家" },
            { item: "售后保障 (After-Sales)", desc: "Supports re-shipment or exchange", desc_cn: "支持补发或换货" },
            { item: "实拍证明 (Verification)", desc: "Donor collection/dispatch, factory process shots available", desc_cn: "供体收发、工厂过程可拍" },
            { item: "特别说明 (Special Notes)", desc: "Some rare specifications require advance order locking", desc_cn: "部分稀缺规格需提前锁单" }
        ]
    },
    {
        id: "Factory 19",
        location: "Xuchang, China",
        timezone: "Asia/Shanghai",
        established: "Since 2020",
        scale: "25 workers workshop",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Domestic recycled hair", desc_cn: "国内回收发" },
            { item: "供体人群特征 (Donor Profile)", desc: "Wide range of sources, varying quality", desc_cn: "来源广泛，品质差异大" },
            { item: "主要发质 (Hair Grade)", desc: "Mostly straight hair, average luster", desc_cn: "直发多，光泽度一般" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black, small amount of mixed colors", desc_cn: "自然黑，少量杂色" },
            { item: "可漂染程度 (Bleach Level)", desc: "Recommended within 27", desc_cn: "建议 27 以内" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Short Straight, Light Wave", desc_cn: "短直、轻波浪" },
            { item: "处理工艺 (Processing)", desc: "Steaming for setting", desc_cn: "蒸煮定型" },
            { item: "月产量 (Monthly Capacity)", desc: "~100 kg per month", desc_cn: "每月约 100 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Significant batch differences", desc_cn: "批次差异明显" },
            { item: "质量检测 (Quality Control)", desc: "Experienced quality inspection", desc_cn: "经验质检" },
            { item: "认证资质 (Certifications)", desc: "Warehouse videos supported", desc_cn: "支持仓库视频" },
            { item: "客户人群 (Main Clients)", desc: "Low-price fast-moving customers", desc_cn: "低价快销客户" },
            { item: "售后保障 (After-Sales)", desc: "Supports exchange only", desc_cn: "仅支持换货" },
            { item: "实拍证明 (Verification)", desc: "In-stock warehouse shots available", desc_cn: "库房现货可拍" },
            { item: "特别说明 (Special Notes)", desc: "Not suitable for high-end customer orders", desc_cn: "不适合高端客单" }
        ]
    },
    {
        id: "Factory 20",
        location: "Lao Cai, Vietnam",
        timezone: "Asia/Ho_Chi_Minh",
        established: "Since 2015",
        scale: "70 workers, village concentrated donor supply",
        details: [
            { item: "原料来源 (Hair Source)", desc: "100% Single Donor", desc_cn: "100% 单供体" },
            { item: "供体人群特征 (Donor Profile)", desc: "Mountainous region women, no chemical treatment", desc_cn: "山区女性，无化学处理" },
            { item: "主要发质 (Hair Grade)", desc: "Coarse and resilient virgin hair", desc_cn: "粗韧处女发" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black", desc_cn: "自然黑" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 60", desc_cn: "可漂 60 号" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Long Straight, Natural Wave", desc_cn: "长直、自然波" },
            { item: "处理工艺 (Processing)", desc: "Purely hand-made, no acid wash", desc_cn: "纯手工，无酸洗" },
            { item: "月产量 (Monthly Capacity)", desc: "~500 kg per month", desc_cn: "每月约 500 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Supports long-term cooperation", desc_cn: "支持长期合作" },
            { item: "质量检测 (Quality Control)", desc: "Three-step quality inspection", desc_cn: "三步质检" },
            { item: "认证资质 (Certifications)", desc: "Donor cutting videos available", desc_cn: "供体剪发视频可提供" },
            { item: "客户人群 (Main Clients)", desc: "High-end wholesale, salons", desc_cn: "高端批发、沙龙" },
            { item: "售后保障 (After-Sales)", desc: "Supports re-shipment", desc_cn: "支持补发" },
            { item: "实拍证明 (Verification)", desc: "Cutting, sorting available for shooting", desc_cn: "剪发、分拣可拍" },
            { item: "特别说明 (Special Notes)", desc: "Long lengths require advance booking", desc_cn: "大长度需提前预定" }
        ]
    },
    {
        id: "Factory 21",
        location: "Hai Duong, Vietnam",
        timezone: "Asia/Ho_Chi_Minh",
        established: "Since 2016",
        scale: "60 workers, 1,500 sqm workshop",
        details: [
            { item: "原料来源 (Hair Source)", desc: "90% Single Donor, small amount of mixed donors", desc_cn: "90% 单供体，少量混供体" },
            { item: "供体人群特征 (Donor Profile)", desc: "Rural women, natural and smooth hair", desc_cn: "乡村女性，发质自然顺滑" },
            { item: "主要发质 (Hair Grade)", desc: "Raw virgin hair, good softness", desc_cn: "原生发，柔软度好" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black to dark brown", desc_cn: "自然黑到深棕" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 60", desc_cn: "可漂到 60 号" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Natural Straight, Natural Wave, Small Water Wave", desc_cn: "自然直、自然波、小水波" },
            { item: "处理工艺 (Processing)", desc: "No acid wash, light steam for curls", desc_cn: "无酸洗，轻蒸卷度" },
            { item: "月产量 (Monthly Capacity)", desc: "~400 kg per month", desc_cn: "每月约 400 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Medium batch, supports small batch drops", desc_cn: "中等批量，支持小单 Drop" },
            { item: "质量检测 (Quality Control)", desc: "Raw material screening + finished product spot check", desc_cn: "原料筛选+成品抽检" },
            { item: "认证资质 (Certifications)", desc: "Donor cutting, sorting videos", desc_cn: "供体剪发、分拣视频" },
            { item: "客户人群 (Main Clients)", desc: "Salons, custom clients", desc_cn: "沙龙、定制客户" },
            { item: "售后保障 (After-Sales)", desc: "Supports exchange or re-shipment", desc_cn: "支持换货或补发" },
            { item: "实拍证明 (Verification)", desc: "Village cutting available for shooting", desc_cn: "村落剪发可拍" },
            { item: "特别说明 (Special Notes)", desc: "Some lengths require advance order locking", desc_cn: "部分长度需提前锁单" }
        ]
    },
    {
        id: "Factory 22",
        location: "Xuchang, China",
        timezone: "Asia/Shanghai",
        established: "Since 2017",
        scale: "35 workers workshop",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Domestic recycled hair", desc_cn: "国内回收发" },
            { item: "供体人群特征 (Donor Profile)", desc: "Dispersed sources, slightly varying quality", desc_cn: "来源分散，品质略有差异" },
            { item: "主要发质 (Hair Grade)", desc: "Mainly straight hair, slightly coarse strands", desc_cn: "直发为主，发丝略粗" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black, small amount of mixed colors", desc_cn: "自然黑，少量混色" },
            { item: "可漂染程度 (Bleach Level)", desc: "Recommended up to 27", desc_cn: "建议漂到 27" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Short Straight, Medium Wave", desc_cn: "短直、中波" },
            { item: "处理工艺 (Processing)", desc: "Steaming for curls", desc_cn: "蒸煮卷度" },
            { item: "月产量 (Monthly Capacity)", desc: "~150 kg per month", desc_cn: "每月约 150 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Flexible supply", desc_cn: "供货灵活" },
            { item: "质量检测 (Quality Control)", desc: "Random spot check", desc_cn: "随机抽检" },
            { item: "认证资质 (Certifications)", desc: "Warehouse videos", desc_cn: "库房视频" },
            { item: "客户人群 (Main Clients)", desc: "Fast-moving low-price market", desc_cn: "快销低价市场" },
            { item: "售后保障 (After-Sales)", desc: "Supports exchange", desc_cn: "支持换货" },
            { item: "实拍证明 (Verification)", desc: "Warehouse available for connection", desc_cn: "仓库可连线" },
            { item: "特别说明 (Special Notes)", desc: "Not recommended for repeated bleaching and dyeing", desc_cn: "不建议反复漂染" }
        ]
    },
    {
        id: "Factory 23",
        location: "Bac Giang, Vietnam",
        timezone: "Asia/Ho_Chi_Minh",
        established: "Since 2015",
        scale: "70 workers, village donor supply",
        details: [
            { item: "原料来源 (Hair Source)", desc: "100% Single Donor", desc_cn: "100% 单供体" },
            { item: "供体人群特征 (Donor Profile)", desc: "Young women, no chemical treatment", desc_cn: "年轻女性，无化学处理" },
            { item: "主要发质 (Hair Grade)", desc: "Coarse and resilient straight hair", desc_cn: "粗韧直发" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black to brown", desc_cn: "自然黑偏棕" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 613", desc_cn: "可漂 613" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Long Straight, Natural Wave, Deep Wave", desc_cn: "长直、自然波、深波" },
            { item: "处理工艺 (Processing)", desc: "Purely hand-made, no acid wash", desc_cn: "纯手工，无酸洗" },
            { item: "月产量 (Monthly Capacity)", desc: "~500 kg per month", desc_cn: "每月约 500 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Stable bulk, supports pre-orders", desc_cn: "批量稳定，支持预定" },
            { item: "质量检测 (Quality Control)", desc: "Triple QC", desc_cn: "三重质检" },
            { item: "认证资质 (Certifications)", desc: "Donor collection/dispatch videos", desc_cn: "供体收发视频" },
            { item: "客户人群 (Main Clients)", desc: "Salons, wig wholesalers", desc_cn: "沙龙、假发批发" },
            { item: "售后保障 (After-Sales)", desc: "Supports exchange", desc_cn: "支持换货" },
            { item: "实拍证明 (Verification)", desc: "Cutting, sorting full process", desc_cn: "剪发、分拣全过程" },
            { item: "特别说明 (Special Notes)", desc: "Popular specifications require advance booking", desc_cn: "热门规格需预定" }
        ]
    },
    {
        id: "Factory 24",
        location: "Qingdao, China",
        timezone: "Asia/Shanghai",
        established: "Since 2020",
        scale: "25 workers small workshop",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Domestic recycled hair", desc_cn: "国内回收发" },
            { item: "供体人群特征 (Donor Profile)", desc: "Wide age range of donors", desc_cn: "供体年龄跨度大" },
            { item: "主要发质 (Hair Grade)", desc: "Straight hair, average smoothness", desc_cn: "直发，柔顺度一般" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black", desc_cn: "自然黑" },
            { item: "可漂染程度 (Bleach Level)", desc: "Recommended light bleaching", desc_cn: "建议浅漂" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Short Straight", desc_cn: "短直" },
            { item: "处理工艺 (Processing)", desc: "Secondary steaming", desc_cn: "二次蒸煮" },
            { item: "月产量 (Monthly Capacity)", desc: "~100 kg per month", desc_cn: "每月约 100 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Significant batch differences", desc_cn: "批次差异明显" },
            { item: "质量检测 (Quality Control)", desc: "Experienced spot check", desc_cn: "经验抽检" },
            { item: "认证资质 (Certifications)", desc: "Warehouse videos", desc_cn: "仓库视频" },
            { item: "客户人群 (Main Clients)", desc: "Low-price fast-moving", desc_cn: "低价快销" },
            { item: "售后保障 (After-Sales)", desc: "Supports exchange", desc_cn: "支持换货" },
            { item: "实拍证明 (Verification)", desc: "In-stock videos", desc_cn: "现货视频" },
            { item: "特别说明 (Special Notes)", desc: "Suitable for low-cost orders", desc_cn: "适合低客单价订单" }
        ]
    },
    {
        id: "Factory 25",
        location: "Son La, Vietnam",
        timezone: "Asia/Ho_Chi_Minh",
        established: "Since 2018",
        scale: "50 workers, direct village sourcing",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Mainly single donor", desc_cn: "单供体为主" },
            { item: "供体人群特征 (Donor Profile)", desc: "Mountainous region women, coarse and resilient hair", desc_cn: "山区女性，发质粗韧" },
            { item: "主要发质 (Hair Grade)", desc: "Coarse straight hair, good smoothness", desc_cn: "粗直发，顺滑度好" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black", desc_cn: "自然黑" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 60", desc_cn: "可漂 60 号" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Long Straight, Natural Wave", desc_cn: "长直、自然波" },
            { item: "处理工艺 (Processing)", desc: "Light steam for curls", desc_cn: "轻蒸卷度" },
            { item: "月产量 (Monthly Capacity)", desc: "~350 kg per month", desc_cn: "每月约 350 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Flexible small batch shipping", desc_cn: "小批量灵活出货" },
            { item: "质量检测 (Quality Control)", desc: "Two-step quality inspection", desc_cn: "两步质检" },
            { item: "认证资质 (Certifications)", desc: "Donor videos", desc_cn: "供体视频" },
            { item: "客户人群 (Main Clients)", desc: "Salons, small wholesale clients", desc_cn: "沙龙、小批发客户" },
            { item: "售后保障 (After-Sales)", desc: "Supports exchange", desc_cn: "支持换货" },
            { item: "实拍证明 (Verification)", desc: "Cutting site available for shooting", desc_cn: "剪发现场可拍" },
            { item: "特别说明 (Special Notes)", desc: "Long lengths require advance booking", desc_cn: "大长度需预定" }
        ]
    },
    {
        id: "Factory 26",
        location: "Guangdong, China",
        timezone: "Asia/Shanghai",
        established: "Since 2015",
        scale: "40 workers workshop",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Southeast Asian mixed supply", desc_cn: "东南亚混供" },
            { item: "供体人群特征 (Donor Profile)", desc: "Mixed donors, larger quality differences", desc_cn: "供体杂，品质差异较大" },
            { item: "主要发质 (Hair Grade)", desc: "Mainly straight", desc_cn: "顺直居多" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black", desc_cn: "自然黑" },
            { item: "可漂染程度 (Bleach Level)", desc: "Light bleaching to 27", desc_cn: "浅漂 27" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Short Straight, Medium Wave", desc_cn: "短直、中波" },
            { item: "处理工艺 (Processing)", desc: "Secondary steaming", desc_cn: "二次蒸煮" },
            { item: "月产量 (Monthly Capacity)", desc: "~180 kg per month", desc_cn: "每月约 180 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Batch fluctuations", desc_cn: "批次波动" },
            { item: "质量检测 (Quality Control)", desc: "Experienced spot check", desc_cn: "经验抽检" },
            { item: "认证资质 (Certifications)", desc: "Warehouse videos", desc_cn: "库房视频" },
            { item: "客户人群 (Main Clients)", desc: "E-commerce low-price items", desc_cn: "电商低价款" },
            { item: "售后保障 (After-Sales)", desc: "Supports exchange", desc_cn: "支持换货" },
            { item: "实拍证明 (Verification)", desc: "In-stock videos", desc_cn: "现货视频" },
            { item: "特别说明 (Special Notes)", desc: "Suitable for quick volume orders", desc_cn: "适合快单走量" }
        ]
    },
    {
        id: "Factory 27",
        location: "Lang Son, Vietnam",
        timezone: "Asia/Ho_Chi_Minh",
        established: "Since 2014",
        scale: "80 workers, village sorting",
        details: [
            { item: "原料来源 (Hair Source)", desc: "100% Single Donor", desc_cn: "100% 单供体" },
            { item: "供体人群特征 (Donor Profile)", desc: "Mountain village women, un-dyed/un-permed", desc_cn: "山村女性，未染烫" },
            { item: "主要发质 (Hair Grade)", desc: "Virgin hair, good hair resilience", desc_cn: "处女发，发质韧性好" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black to dark brown", desc_cn: "自然黑偏深棕" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 613", desc_cn: "可漂 613" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Long Straight, Deep Wave, Body Wave", desc_cn: "长直、深波、大波浪" },
            { item: "处理工艺 (Processing)", desc: "Purely hand-made, no acid wash", desc_cn: "纯手工，无酸洗" },
            { item: "月产量 (Monthly Capacity)", desc: "~550 kg per month", desc_cn: "每月约 550 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Long-term cooperation available for locking orders", desc_cn: "长期合作可锁货" },
            { item: "质量检测 (Quality Control)", desc: "Three-step quality inspection", desc_cn: "三步质检" },
            { item: "认证资质 (Certifications)", desc: "Cutting videos", desc_cn: "剪发视频" },
            { item: "客户人群 (Main Clients)", desc: "Salons, high-end customization", desc_cn: "沙龙、高端定制" },
            { item: "售后保障 (After-Sales)", desc: "Supports re-shipment", desc_cn: "支持补发" },
            { item: "实拍证明 (Verification)", desc: "Donor cutting", desc_cn: "供体剪发" },
            { item: "特别说明 (Special Notes)", desc: "Long lengths require advance booking", desc_cn: "大长度需预定" }
        ]
    },
    {
        id: "Factory 28",
        location: "Xuchang, China",
        timezone: "Asia/Shanghai",
        established: "Since 2019",
        scale: "30 workers workshop",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Mixed donors", desc_cn: "混供体" },
            { item: "供体人群特征 (Donor Profile)", desc: "Wide donor range, significant texture differences", desc_cn: "供体跨度大，质感差异明显" },
            { item: "主要发质 (Hair Grade)", desc: "Straight hair, average smoothness", desc_cn: "直发，顺直感一般" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black", desc_cn: "自然黑" },
            { item: "可漂染程度 (Bleach Level)", desc: "Light bleaching", desc_cn: "浅漂" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Short Straight", desc_cn: "短直" },
            { item: "处理工艺 (Processing)", desc: "Steaming for curls", desc_cn: "蒸煮卷度" },
            { item: "月产量 (Monthly Capacity)", desc: "~120 kg per month", desc_cn: "每月约 120 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Flexible supply", desc_cn: "灵活供货" },
            { item: "质量检测 (Quality Control)", desc: "Random spot check", desc_cn: "随机抽检" },
            { item: "认证资质 (Certifications)", desc: "Warehouse videos", desc_cn: "库房视频" },
            { item: "客户人群 (Main Clients)", desc: "Low-price e-commerce market", desc_cn: "低价电商市场" },
            { item: "售后保障 (After-Sales)", desc: "Supports exchange", desc_cn: "支持换货" },
            { item: "实拍证明 (Verification)", desc: "In-stock items available for shooting", desc_cn: "现货可拍" },
            { item: "特别说明 (Special Notes)", desc: "Deep bleaching not recommended", desc_cn: "不推荐深漂" }
        ]
    },
    {
        id: "Factory 29",
        location: "Quang Ninh, Vietnam",
        timezone: "Asia/Ho_Chi_Minh",
        established: "Since 2015",
        scale: "70 workers",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Single donor + concentrated village acquisition", desc_cn: "单供体+集中村落收购" },
            { item: "供体人群特征 (Donor Profile)", desc: "Young women, no perm/dye", desc_cn: "年轻女性，无烫染" },
            { item: "主要发质 (Hair Grade)", desc: "Coarse and resilient straight hair", desc_cn: "粗韧直发" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black to brown", desc_cn: "自然黑偏棕" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 60", desc_cn: "可漂 60 号" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Natural Straight, Natural Wave", desc_cn: "自然直、自然波" },
            { item: "处理工艺 (Processing)", desc: "Purely hand-made", desc_cn: "纯手工" },
            { item: "月产量 (Monthly Capacity)", desc: "~450 kg per month", desc_cn: "每月约 450 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Long-term stable supply", desc_cn: "长期稳定供货" },
            { item: "质量检测 (Quality Control)", desc: "Triple QC", desc_cn: "三重质检" },
            { item: "认证资质 (Certifications)", desc: "Cutting videos", desc_cn: "剪发视频" },
            { item: "客户人群 (Main Clients)", desc: "Wholesale clients, salons", desc_cn: "批发客户、沙龙" },
            { item: "售后保障 (After-Sales)", desc: "Supports exchange", desc_cn: "支持换货" },
            { item: "实拍证明 (Verification)", desc: "Donor process", desc_cn: "供体过程" },
            { item: "特别说明 (Special Notes)", desc: "Some long hair requires advance booking", desc_cn: "部分长发需预定" }
        ]
    },
    {
        id: "Factory 30",
        location: "Shandong, China",
        timezone: "Asia/Shanghai",
        established: "Since 2021",
        scale: "25 workers new workshop",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Recycled hair + small amount of mixed supply", desc_cn: "回收发+少量混供" },
            { item: "供体人群特征 (Donor Profile)", desc: "Complex sources", desc_cn: "来源复杂" },
            { item: "主要发质 (Hair Grade)", desc: "Smooth, easy to manage", desc_cn: "顺直，打理较易" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black", desc_cn: "自然黑" },
            { item: "可漂染程度 (Bleach Level)", desc: "Light bleaching", desc_cn: "浅漂" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Short Straight", desc_cn: "短直" },
            { item: "处理工艺 (Processing)", desc: "Steaming", desc_cn: "蒸煮" },
            { item: "月产量 (Monthly Capacity)", desc: "~80 kg per month", desc_cn: "每月约 80 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Small batch quick orders", desc_cn: "小批量快单" },
            { item: "质量检测 (Quality Control)", desc: "Random spot check", desc_cn: "随机抽检" },
            { item: "认证资质 (Certifications)", desc: "In-stock videos", desc_cn: "现货视频" },
            { item: "客户人群 (Main Clients)", desc: "Low-price fast-moving", desc_cn: "低价快销" },
            { item: "售后保障 (After-Sales)", desc: "Supports exchange", desc_cn: "支持换货" },
            { item: "实拍证明 (Verification)", desc: "Warehouse shooting", desc_cn: "库房拍摄" },
            { item: "特别说明 (Special Notes)", desc: "Not suitable for high-end customization", desc_cn: "不适合高端定制" }
        ]
    },
    {
        id: "Factory 31",
        location: "Yen Bai, Vietnam",
        timezone: "Asia/Ho_Chi_Minh",
        established: "Since 2012",
        scale: "80 workers, direct village sourcing",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Single donor", desc_cn: "单供体" },
            { item: "供体人群特征 (Donor Profile)", desc: "Northern mountain donors, healthy and un-dyed", desc_cn: "北部山区供体，健康无染" },
            { item: "主要发质 (Hair Grade)", desc: "Coarse straight hair", desc_cn: "粗直发" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black", desc_cn: "自然黑" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 613", desc_cn: "可漂 613" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Long Straight, Deep Wave", desc_cn: "长直、深波" },
            { item: "处理工艺 (Processing)", desc: "Purely hand-made", desc_cn: "纯手工" },
            { item: "月产量 (Monthly Capacity)", desc: "~500 kg per month", desc_cn: "每月约 500 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Large batch stable", desc_cn: "大批稳定" },
            { item: "质量检测 (Quality Control)", desc: "Triple QC", desc_cn: "三重质检" },
            { item: "认证资质 (Certifications)", desc: "Donor videos", desc_cn: "供体视频" },
            { item: "客户人群 (Main Clients)", desc: "Salons, wholesalers", desc_cn: "沙龙、批发" },
            { item: "售后保障 (After-Sales)", desc: "Supports re-shipment", desc_cn: "支持补发" },
            { item: "实拍证明 (Verification)", desc: "Cutting process", desc_cn: "剪发过程" },
            { item: "特别说明 (Special Notes)", desc: "Large orders recommended to lock in advance", desc_cn: "大单建议提前锁单" }
        ]
    },
    {
        id: "Factory 32",
        location: "Xuchang, China",
        timezone: "Asia/Shanghai",
        established: "Since 2020",
        scale: "30 workers workshop",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Domestic recycled", desc_cn: "国内回收" },
            { item: "供体人群特征 (Donor Profile)", desc: "Wide range of sources", desc_cn: "来源广" },
            { item: "主要发质 (Hair Grade)", desc: "Straight hair", desc_cn: "直发" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black", desc_cn: "自然黑" },
            { item: "可漂染程度 (Bleach Level)", desc: "Light bleaching", desc_cn: "浅漂" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Short Straight", desc_cn: "短直" },
            { item: "处理工艺 (Processing)", desc: "Steaming", desc_cn: "蒸煮" },
            { item: "月产量 (Monthly Capacity)", desc: "~100 kg per month", desc_cn: "每月约 100 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Batch differences", desc_cn: "批次差异" },
            { item: "质量检测 (Quality Control)", desc: "Experienced spot check", desc_cn: "经验抽检" },
            { item: "认证资质 (Certifications)", desc: "Warehouse available for shooting", desc_cn: "仓库可拍" },
            { item: "客户人群 (Main Clients)", desc: "Low-price e-commerce", desc_cn: "低价电商" },
            { item: "售后保障 (After-Sales)", desc: "Supports exchange", desc_cn: "支持换货" },
            { item: "实拍证明 (Verification)", desc: "In-stock videos", desc_cn: "现货视频" },
            { item: "特别说明 (Special Notes)", desc: "Suitable for quick orders", desc_cn: "快单适用" }
        ]
    },
    {
        id: "Factory 33",
        location: "Thai Binh, Vietnam",
        timezone: "Asia/Ho_Chi_Minh",
        established: "Since 2017",
        scale: "60 workers, village sorting",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Single donor", desc_cn: "单供体" },
            { item: "供体人群特征 (Donor Profile)", desc: "Young women, healthy donors", desc_cn: "年轻女性，供体健康" },
            { item: "主要发质 (Hair Grade)", desc: "Smooth virgin hair", desc_cn: "顺滑处女发" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black to brown", desc_cn: "自然黑偏棕" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 613", desc_cn: "可漂 613" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Natural Straight, Wave", desc_cn: "自然直、波浪" },
            { item: "处理工艺 (Processing)", desc: "Purely hand-made", desc_cn: "纯手工" },
            { item: "月产量 (Monthly Capacity)", desc: "~500 kg per month", desc_cn: "每月约 500 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Bulk pre-orders", desc_cn: "大批预定" },
            { item: "质量检测 (Quality Control)", desc: "Three-step quality inspection", desc_cn: "三步质检" },
            { item: "认证资质 (Certifications)", desc: "Cutting videos", desc_cn: "剪发视频" },
            { item: "客户人群 (Main Clients)", desc: "High-end salons", desc_cn: "高端沙龙" },
            { item: "售后保障 (After-Sales)", desc: "Supports re-shipment", desc_cn: "支持补发" },
            { item: "实拍证明 (Verification)", desc: "Cutting and sorting", desc_cn: "剪发分拣" },
            { item: "特别说明 (Special Notes)", desc: "Hot-selling lengths require advance booking", desc_cn: "热销长度需预定" }
        ]
    },
    {
        id: "Factory 34",
        location: "Vinh Phuc, Vietnam",
        timezone: "Asia/Ho_Chi_Minh",
        established: "Since 2015",
        scale: "70 workers",
        details: [
            { item: "原料来源 (Hair Source)", desc: "Single donor", desc_cn: "单供体" },
            { item: "供体人群特征 (Donor Profile)", desc: "Village female donors", desc_cn: "村落女性供体" },
            { item: "主要发质 (Hair Grade)", desc: "Coarse and resilient virgin hair", desc_cn: "粗韧处女发" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black", desc_cn: "自然黑" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 60", desc_cn: "可漂 60 号" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Long Straight, Natural Wave", desc_cn: "长直、自然波" },
            { item: "处理工艺 (Processing)", desc: "Purely hand-made", desc_cn: "纯手工" },
            { item: "月产量 (Monthly Capacity)", desc: "~400 kg per month", desc_cn: "每月约 400 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Long-term supply", desc_cn: "长期供货" },
            { item: "质量检测 (Quality Control)", desc: "Double quality inspection", desc_cn: "双重质检" },
            { item: "认证资质 (Certifications)", desc: "Cutting videos", desc_cn: "剪发视频" },
            { item: "客户人群 (Main Clients)", desc: "Salons, wholesalers", desc_cn: "沙龙、批发" },
            { item: "售后保障 (After-Sales)", desc: "Supports exchange", desc_cn: "支持换货" },
            { item: "实拍证明 (Verification)", desc: "Donor process", desc_cn: "供体过程" },
            { item: "特别说明 (Special Notes)", desc: "Some large orders require locking", desc_cn: "部分大单需锁单" }
        ]
    }
];

/**
 * 判断给定时间（在特定时区下）是否是工作时间。
 * 假设工作时间为周一至周五，当地时间上午 9:00 至下午 6:00 (18:00)。
 * @param {Date} now 当前客户端时间对象
 * @param {string} timezone 工厂所在的时区字符串，例如 "Asia/Shanghai"
 * @returns {boolean} 如果是工作时间则返回 true，否则返回 false
 */
function isWorkingHours(now, timezone) {
    const options = {
        weekday: 'long', // 星期几
        hour: 'numeric', // 小时
        timeZone: timezone // 指定时区
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const parts = formatter.formatToParts(now);

    let weekday = '';
    for (const part of parts) {
        if (part.type === 'weekday') {
            weekday = part.value;
            break;
        }
    }

    const hour24Options = { hour: 'numeric', hourCycle: 'h23', timeZone: timezone };
    const hour24Formatter = new Intl.DateTimeFormat('en-US', hour24Options);
    const localHour24 = parseInt(hour24Formatter.format(now), 10);

    const isWeekday = weekday !== 'Saturday' && weekday !== 'Sunday';
    const isWorkingTime = localHour24 >= 9 && localHour24 < 18; // 9:00 AM to 5:59 PM

    return isWeekday && isWorkingTime;
}


// 动态生成工厂列表卡片
function renderFactoryList() {
    const factoryListContainer = document.getElementById('factory-list');
    if (!factoryListContainer) return;

    factoryListContainer.innerHTML = ''; // 清空现有内容
    const currentTime = new Date(); // 获取当前客户端时间

    FACTORIES_DATA.forEach(factory => {
        const factoryCard = document.createElement('a');
        factoryCard.href = `factory-detail.html?id=${encodeURIComponent(factory.id)}`; // 传递工厂 ID
        factoryCard.classList.add('factory-card');

        // 获取并处理概览信息，使其显示中英文
        const locationParts = factory.location.split(', ');
        const locationEN = locationParts[0] || '';
        // 尝试从 locationParts[1] 获取城市/国家中文信息，如果不存在则使用 locationParts[0]
        let locationCN;
        const lastPart = locationParts[locationParts.length - 1].trim(); // Usually the country name, e.g., "Vietnam"
        if (lastPart === "Vietnam") locationCN = "越南";
        else if (lastPart === "China") locationCN = "中国";
        else if (lastPart === "Bangladesh") locationCN = "孟加拉国";
        else if (lastPart === "Cambodia") locationCN = "柬埔寨";
        else if (lastPart === "Indonesia") locationCN = "印度尼西亚";
        else if (lastPart === "Myanmar") locationCN = "缅甸";
        else if (lastPart === "Thailand") locationCN = "泰国";
        else if (lastPart === "Philippines") locationCN = "菲律宾";
        else if (locationEN === "Hanoi") locationCN = "河内"; // Added specific city translation
        else if (locationEN === "Hai Phong") locationCN = "海防"; // Added specific city translation
        else if (locationEN === "Xuchang") locationCN = "许昌"; // Added specific city translation
        else if (locationEN === "Ho Chi Minh City") locationCN = "胡志明市"; // Added specific city translation
        else if (locationEN === "Guangdong") locationCN = "广东"; // Added specific city translation
        else if (locationEN === "Lang Son") locationCN = "谅山"; // Added specific city translation
        else if (locationEN === "Thanh Hoa") locationCN = "清化"; // Added specific city translation
        else if (locationEN === "Henan") locationCN = "河南"; // Added specific city translation
        else if (locationEN === "Nam Dinh") locationCN = "南定"; // Added specific city translation
        else if (locationEN === "Hunan") locationCN = "湖南"; // Added specific city translation
        else if (locationEN === "Shandong") locationCN = "山东"; // Added specific city translation
        else if (locationEN === "Ha Giang") locationCN = "河江"; // Added specific city translation
        else if (locationEN === "Fujian") locationCN = "福建"; // Added specific city translation
        else if (locationEN === "Thai Nguyen") locationCN = "太原"; // Added specific city translation
        else if (locationEN === "Qingdao") locationCN = "青岛"; // Added specific city translation
        else if (locationEN === "Lao Cai") locationCN = "老街"; // Added specific city translation
        else if (locationEN === "Hai Duong") locationCN = "海阳";
        else if (locationEN === "Bac Giang") locationCN = "北江";
        else if (locationEN === "Shandong") locationCN = "山东";
        else if (locationEN === "Son La") locationCN = "山罗";
        else if (locationEN === "Jiangsu") locationCN = "江苏";
        else if (locationEN === "Quang Ninh") locationCN = "广宁";
        else if (locationEN === "Zhejiang") locationCN = "浙江";
        else if (locationEN === "Yen Bai") locationCN = "安沛";
        else if (locationEN === "Thai Binh") locationCN = "太平";
        else if (locationEN === "Vinh Phuc") locationCN = "永福";
        else if (locationParts.length > 1) { // Fallback for unknown, try the last part
            locationCN = lastPart;
        } else {
            locationCN = locationParts[0].trim(); // Fallback for single-part locations
        }


        const establishedEN = factory.established;
        const establishedCN = factory.established.replace('Since ', '自 ');

        const scaleEN = factory.scale;
        const scaleCN = scaleEN
            .replace('workers', '名工人')
            .replace('sqm workshop', '平米车间')
            .replace('processing point', '加工点') // Added for Factory 02, 12
            .replace('small workshop', '小作坊') // Added for Factory 04, 16, 22, 24, 28, 32
            .replace('medium-sized processing point', '中型加工点') // Factory 12
            .replace('large workshop', '大型车间') // Factory 03
            .replace('medium-sized workshop', '中型工坊') // Added for Factory 09
            .replace('standard assembly line', '标准化流水线') // Added for Factory 10, 18
            .replace('village sorting center', '村落分拣中心') // Added for Factory 13, 33
            .replace('direct village sourcing', '村落直采') // Added for Factory 15, 25, 31
            .replace('single-layer processing area', '单层加工区') // Added for Factory 07
            .replace('village concentrated donor supply', '村落集中供体') // Added for Factory 20
            .replace('village donor supply', '村落供体') // Factory 23
            .replace('new workshop', '新作坊') // Factory 30
            .replace('workshop', '车间'); // Generic fallback

        // 从 details 数组中找到月产量
        const monthlyCapacityItem = factory.details.find(d => d.item.includes('月产量'));
        const monthlyCapacityEN = monthlyCapacityItem ? monthlyCapacityItem.desc : 'N/A';
        const monthlyCapacityCN = monthlyCapacityItem ? monthlyCapacityItem.desc_cn : '信息缺失';

        // 判断工厂是否在线
        const isOnline = isWorkingHours(currentTime, factory.timezone);
        const statusClass = isOnline ? 'online' : 'offline';
        const statusText = isOnline ? '在线' : '离线';

        factoryCard.innerHTML = `
            <div class="card-header">
                ${factory.id}
                <span class="status-indicator ${statusClass}" title="工厂当前状态：${statusText}"></span>
            </div>
            <div class="card-body">
                <p><strong>所在地区 (Location):</strong> ${locationEN}<br/>所在地区: ${locationCN}</p>
                <p><strong>建厂时间 (Established):</strong> ${establishedEN}<br/>建厂时间: ${establishedCN}</p>
                <p><strong>工厂规模 (Scale):</strong> ${scaleEN}<br/>工厂规模: ${scaleCN}</p>
                <p><strong>月产量 (Monthly Capacity):</strong> ${monthlyCapacityEN}<br/>月产量: ${monthlyCapacityCN}</p>
            </div>
        `;
        factoryListContainer.appendChild(factoryCard);
    });
}

// 渲染工厂详情页
function renderFactoryDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const factoryId = urlParams.get('id');

    if (!factoryId) {
        document.querySelector('.container').innerHTML = `<p style="text-align: center; font-size: 1.2em; color: #e74c3c; padding: 50px;">未找到工厂信息。<br>请从 <a href="index.html" style="color: #3498db;">工厂总览页</a> 选择一个工厂。</p>`;
        document.getElementById('detail-page-title').textContent = '工厂详情 - 未找到';
        return;
    }

    const factory = FACTORIES_DATA.find(f => f.id === factoryId);

    if (!factory) {
        document.querySelector('.container').innerHTML = `<p style="text-align: center; font-size: 1.2em; color: #e74c3c; padding: 50px;">工厂 "${factoryId}" 的信息不存在。<br>请从 <a href="index.html" style="color: #3498db;">工厂总览页</a> 选择一个工厂。</p>`;
        document.getElementById('detail-page-title').textContent = `工厂详情 - ${factoryId} (未找到)`;
        return;
    }

    // 更新页面标题
    document.getElementById('detail-page-title').textContent = `工厂详情 - ${factory.id}`;
    document.getElementById('factory-video-title').textContent = `${factory.id} 直播`;

    // 更新概览信息
    document.getElementById('detail-factory-id').textContent = `${factory.id}`;
    const locationParts = factory.location.split(', ');
    let locationCNForDetail;
    const lastPartForDetail = locationParts[locationParts.length - 1].trim();
    if (lastPartForDetail === "Vietnam") locationCNForDetail = "越南";
    else if (lastPartForDetail === "China") locationCNForDetail = "中国";
    else if (lastPartForDetail === "Bangladesh") locationCNForDetail = "孟加拉国";
    else if (lastPartForDetail === "Cambodia") locationCNForDetail = "柬埔寨";
    else if (lastPartForDetail === "Indonesia") locationCNForDetail = "印度尼西亚";
    else if (lastPartForDetail === "Myanmar") locationCNForDetail = "缅甸";
    else if (lastPartForDetail === "Thailand") locationCNForDetail = "泰国";
    else if (lastPartForDetail === "Philippines") locationCNForDetail = "菲律宾";
    else if (locationParts[0].trim() === "Hanoi") locationCNForDetail = "河内";
    else if (locationParts[0].trim() === "Hai Phong") locationCNForDetail = "海防";
    else if (locationParts[0].trim() === "Guangxi") locationCNForDetail = "广西";
    else if (locationParts[0].trim() === "Ho Chi Minh City") locationCNForDetail = "胡志明市";
    else if (locationParts[0].trim() === "Guangdong") locationCNForDetail = "广东";
    else if (locationParts[0].trim() === "Lang Son") locationCNForDetail = "谅山";
    else if (locationParts[0].trim() === "Thanh Hoa") locationCNForDetail = "清化";
    else if (locationParts[0].trim() === "Henan") locationCNForDetail = "河南";
    else if (locationParts[0].trim() === "Nam Dinh") locationCNForDetail = "南定";
    else if (locationParts[0].trim() === "Hunan") locationCNForDetail = "湖南";
    else if (locationParts[0].trim() === "Shandong") locationCNForDetail = "山东";
    else if (locationParts[0].trim() === "Ha Giang") locationCNForDetail = "河江";
    else if (locationParts[0].trim() === "Fujian") locationCNForDetail = "福建";
    else if (locationParts[0].trim() === "Thai Nguyen") locationCNForDetail = "太原";
    else if (locationParts[0].trim() === "Hubei") locationCNForDetail = "湖北";
    else if (locationParts[0].trim() === "Lao Cai") locationCNForDetail = "老街";
    else if (locationParts[0].trim() === "Hai Duong") locationCNForDetail = "海阳";
    else if (locationParts[0].trim() === "Bac Giang") locationCNForDetail = "北江";
    else if (locationParts[0].trim() === "Anhui") locationCNForDetail = "安徽";
    else if (locationParts[0].trim() === "Son La") locationCNForDetail = "山罗";
    else if (locationParts[0].trim() === "Jiangsu") locationCNForDetail = "江苏";
    else if (locationParts[0].trim() === "Quang Ninh") locationCNForDetail = "广宁";
    else if (locationParts[0].trim() === "Zhejiang") locationCNForDetail = "浙江";
    else if (locationParts[0].trim() === "Yen Bai") locationCNForDetail = "安沛";
    else if (locationParts[0].trim() === "Thai Binh") locationCNForDetail = "太平";
    else if (locationParts[0].trim() === "Vinh Phuc") locationCNForDetail = "永福";
    else if (locationParts.length > 1) {
        locationCNForDetail = lastPartForDetail;
    } else {
        locationCNForDetail = locationParts[0].trim();
    }
    document.getElementById('detail-location').textContent = `${factory.location} (所在地区：${locationCNForDetail})`;

    document.getElementById('detail-established').textContent = `${factory.established} (建厂时间：${factory.established.replace('Since ', '自 ')})`;
    const scaleCNForDetail = factory.scale
        .replace('workers', '名工人')
        .replace('sqm workshop', '平米车间')
        .replace('processing point', '加工点')
        .replace('small workshop', '小作坊')
        .replace('medium-sized processing point', '中型加工点')
        .replace('large workshop', '大型车间')
        .replace('medium-sized workshop', '中型工坊')
        .replace('standard assembly line', '标准化流水线')
        .replace('village sorting center', '村落分拣中心')
        .replace('direct village sourcing', '村落直采')
        .replace('single-layer processing area', '单层加工区')
        .replace('village concentrated donor supply', '村落集中供体')
        .replace('village donor supply', '村落供体')
        .replace('new workshop', '新作坊')
        .replace('workshop', '车间');
    document.getElementById('detail-scale').textContent = `${factory.scale} (工厂规模：${scaleCNForDetail})`;


    // 填充关键指标
    const monthlyCapacityItem = factory.details.find(d => d.item.includes('月产量'));
    if (monthlyCapacityItem) {
        document.getElementById('detail-monthly-capacity').innerHTML = `${monthlyCapacityItem.desc}<br/><span style="font-size: 0.6em; color: #666; font-weight: normal;">${monthlyCapacityItem.desc_cn}</span>`;
    }

    const bleachLevelItem = factory.details.find(d => d.item.includes('可漂染程度'));
    if (bleachLevelItem) {
        document.getElementById('detail-bleach-level').innerHTML = `${bleachLevelItem.desc}<br/><span style="font-size: 0.6em; color: #666; font-weight: normal;">${bleachLevelItem.desc_cn}</span>`;
    }


    // 详细描述分组填充
    const productGroupBody = document.getElementById('detail-group-product');
    const processQcGroupBody = document.getElementById('detail-group-process-qc');
    const businessSupportGroupBody = document.getElementById('detail-group-business-support');
    const notesGroupBody = document.getElementById('detail-group-notes');

    // 清空现有内容
    productGroupBody.innerHTML = '';
    processQcGroupBody.innerHTML = '';
    businessSupportGroupBody.innerHTML = '';
    notesGroupBody.innerHTML = '';

    factory.details.forEach(detail => {
        const row = document.createElement('tr');
        // 合并中英文到一个单元格，并用 span 区分
        row.innerHTML = `
            <td>${detail.item}</td>
            <td>
                <span class="en-desc">${detail.desc}</span>
                <span class="cn-desc">${detail.desc_cn}</span>
            </td>
        `;

        // 根据 item 将行添加到不同的分组
        if ([
            "原料来源 (Hair Source)",
            "供体人群特征 (Donor Profile)",
            "主要发质 (Hair Grade)",
            "发质颜色 (Natural Color)",
            "可定制花型 (Curl/Style Options)"
        ].includes(detail.item)) {
            productGroupBody.appendChild(row);
        } else if ([
            "处理工艺 (Processing)",
            "质量检测 (Quality Control)",
            "认证资质 (Certifications)",
            "实拍证明 (Verification)"
        ].includes(detail.item)) {
            processQcGroupBody.appendChild(row);
        } else if ([
            "客户人群 (Main Clients)",
            "售后保障 (After-Sales)",
            "供货稳定性 (Supply Stability)" // 月产量现在单独显示，所以这里不包含
        ].includes(detail.item)) {
            businessSupportGroupBody.appendChild(row);
        } else if ([
            "特别说明 (Special Notes)"
        ].includes(detail.item)) {
            notesGroupBody.appendChild(row);
        }
        // 月产量和可漂染程度已在 key-metrics 中单独处理，不再添加到表格
    });
}
// 新增：更新当前时间的函数
function updateCurrentTime() {
    const now = new Date();

    // 格式化日期部分
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，所以+1
    const day = now.getDate().toString().padStart(2, '0');

    // 格式化时间部分
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // 获取时区名称
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // 构建显示字符串
    const datetimeString = `${year}/${month}/${day}  ${hours}:${minutes}:${seconds} ${timezone}`;

    // 更新到HTML元素
    const datetimeElement = document.getElementById('current-datetime');
    if (datetimeElement) {
        datetimeElement.textContent = datetimeString;
    }
}
