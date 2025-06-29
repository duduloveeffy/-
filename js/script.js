// 核心数据结构不再随机生成，而是由固定数据定义
const FACTORIES_DATA = [
    // --- 在这里插入您固定的工厂数据数组 ---
    // 每个工厂对象应该像下面这样，您需要为 Factory 01 到 Factory 34 依次添加。
    // 确保 id 是唯一的，并且 location 和 timezone 是对应的。
    {
        id: "Factory 01",
        location: "Hanoi, Vietnam", // 完整的英文地点
        timezone: "Asia/Ho_Chi_Minh", // 对应的时区
        established: "Since 2015", // 固定建厂时间
        scale: "100+ workers, 2,500 sqm workshop", // 固定工厂规模
        details: [
            // 这些详情是 Factory 01 独有的固定详情
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
        id: "Factory 02",
        location: "Guangzhou, China",
        timezone: "Asia/Shanghai",
        established: "Since 2012",
        scale: "80+ workers, 2,000 sqm workshop",
        details: [
            // Factory 02 的固定详情
            { item: "原料来源 (Hair Source)", desc: "Ethically Sourced, Multi-Donor", desc_cn: "道德采购，多供体" },
            { item: "供体人群特征 (Donor Profile)", desc: "Various regions, healthy hair", desc_cn: "来自不同地区，健康发质" },
            { item: "主要发质 (Hair Grade)", desc: "Remy hair, cuticles aligned", desc_cn: "顺发，毛鳞片方向一致" },
            { item: "发质颜色 (Natural Color)", desc: "Natural black, consistent", desc_cn: "自然黑，颜色均匀" },
            { item: "可漂染程度 (Bleach Level)", desc: "Up to 27 Blonde", desc_cn: "可漂到 27 浅金色" },
            { item: "可定制花型 (Curl/Style Options)", desc: "Straight, Body Wave, Kinky Curly", desc_cn: "直发、大波浪、非裔卷" },
            { item: "处理工艺 (Processing)", desc: "Gentle chemical wash, minimal silicone", desc_cn: "温和化学清洗，少量硅油" },
            { item: "月产量 (Monthly Capacity)", desc: "~700 kg per month", desc_cn: "每月约 700 公斤" },
            { item: "供货稳定性 (Supply Stability)", desc: "Large stock available, stable supply", desc_cn: "库存充足，供货稳定" },
            { item: "质量检测 (Quality Control)", desc: "Standard QC process", desc_cn: "标准质检流程" },
            { item: "认证资质 (Certifications)", desc: "ISO certified workshop", desc_cn: "ISO 认证车间" },
            { item: "客户人群 (Main Clients)", desc: "E-commerce retailers, large wholesalers", desc_cn: "电商零售商，大型批发商" },
            { item: "售后保障 (After-Sales)", desc: "Standard return policy", desc_cn: "标准退货政策" },
            { item: "实拍证明 (Verification)", desc: "Factory tour videos available", desc_cn: "可提供工厂参观视频" },
            { item: "特别说明 (Special Notes)", desc: "Minor shedding possible with certain styles", desc_cn: "部分发型可能存在少量脱发" }
        ]
    },
    // ... 您需要在这里继续添加 Factory 03 到 Factory 34 的数据
    // 确保每个工厂对象的结构与 Factory 01 和 Factory 02 示例相同
    // 您可以复制 Factory 01 的结构，然后修改 id、location、timezone、established、scale 和 details 中的具体值。
    // 例如：
    // {
    //     id: "Factory 03",
    //     location: "Dhaka, Bangladesh",
    //     timezone: "Asia/Dhaka",
    //     established: "Since 2010",
    //     scale: "60+ workers, 1,500 sqm workshop",
    //     details: [
    //         // Factory 03 的固定详情
    //     ]
    // },
    // ... 直到 Factory 34
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
        if (locationParts.length > 1) {
            const lastPart = locationParts[locationParts.length - 1].trim(); // 通常是国家名，例如 "Vietnam"
            if (lastPart === "Vietnam") locationCN = "越南";
            else if (lastPart === "China") locationCN = "中国";
            else if (lastPart === "Bangladesh") locationCN = "孟加拉国";
            else if (lastPart === "Cambodia") locationCN = "柬埔寨";
            else if (lastPart === "Indonesia") locationCN = "印度尼西亚";
            else if (lastPart === "Myanmar") locationCN = "缅甸";
            else if (lastPart === "Thailand") locationCN = "泰国";
            else if (lastPart === "Philippines") locationCN = "菲律宾";
            else locationCN = locationParts[1].trim(); // Fallback for unknown
        } else {
            locationCN = locationParts[0].trim();
        }


        const establishedEN = factory.established;
        const establishedCN = factory.established.replace('Since ', '自 ');

        const scaleEN = factory.scale;
        const scaleCN = scaleEN
            .replace('workers', '名工人')
            .replace('sqm workshop', '平米车间');


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
    const locationDisplay = locationParts[1] ? `${factory.location} (所在地区：${locationParts[1].trim()})` : `${factory.location} (所在地区：${locationParts[0].trim()})`;
    document.getElementById('detail-location').textContent = locationDisplay;

    document.getElementById('detail-established').textContent = `${factory.established} (建厂时间：${factory.established.replace('Since ', '自 ')})`;
    document.getElementById('detail-scale').textContent = `${factory.scale} (工厂规模：${factory.scale.replace('workers', '名工人').replace('sqm workshop', '平米车间')})`;

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
