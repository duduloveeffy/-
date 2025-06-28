const FACTORIES_DATA = [];

// 基础工厂详情模板（基于您提供的Factory 17）
const baseFactoryDetails = [
    { item: "原料来源 (Hair Source)", desc: "100% Single Donor, Direct Collection", desc_cn: "100% 单供体，直接收集" },
    { item: "供体人群特征 (Donor Profile)", desc: "Rural women, no chemical treatment", desc_cn: "乡村女性，无化学处理，越南人" },
    { item: "主要发质 (Hair Grade)", desc: "Raw virgin hair, full cuticle, unprocessed", desc_cn: "原生处女发，毛鳞片完整，未加工" },
    { item: "发质颜色 (Natural Color)", desc: "Natural black to brown, slight natural variation", desc_cn: "自然黑到棕色，可能有轻微自然色差" },
    { item: "可漂染程度 (Bleach Level)", desc: "Up to 613 Blonde", desc_cn: "可漂到 613 浅金色" },
    { item: "可定制花型 (Curl/Style Options)", desc: "Straight, Natural Wave, Body Wave, Deep Wave, Loose Wave", desc_cn: "直发、自然波浪、大波浪、深波浪、水波浪" },
    { item: "处理工艺 (Processing)", desc: "No acid wash, No silicone, Gentle steam only for curls", desc_cn: "无酸洗、无硅油，仅对卷度做轻蒸处理" },
    { item: "月产量 (Monthly Capacity)", desc: "~500 kg per month", desc_cn: "每月约 500 公斤" },
    { item: "供货稳定性 (Supply Stability)", desc: "Small batch drops only to ensure quality consistency", desc_cn: "仅小批量出货，保证品质一致性" },
    { item: "质量检测 (Quality Control)", desc: "3-step QC: Raw sorting → Double drawn → Final inspection", desc_cn: "三步质检：原料分拣 → 双抽工艺 → 最终检验" },
    { item: "认证资质 (Certifications)", desc: "Internal QC videos available, no industrial chemical certificates for raw hair", desc_cn: "可提供内部质检视频，原生发无工业化学证书" },
    { item: "客户人群 (Main Clients)", desc: "Premium salon owners, wig makers, repeat wholesale buyers", desc_cn: "高端沙龙店主、假发定制师、批发回购客户" },
    { item: "售后保障 (After-Sales)", desc: "Video proof required; refund or exchange policy available", desc_cn: "需提供视频证据，支持退款或补发" },
    { item: "实拍证明 (Verification)", desc: "donor cutting video, random batch test available", desc_cn: "可提供工厂直播、供体剪发视频、随机抽检" },
    { item: "特别说明 (Special Notes)", desc: "Natural color difference may occur; we do not guarantee industrial-level color uniformity", desc_cn: "每批可能存在自然色差，不保证工业级颜色一致性" }
];

// 模拟数据生成函数
function generateFactoryData(index) {
    const id = `Factory ${index.toString().padStart(2, '0')}`; // 例如 Factory 01, Factory 02
    const locations = [
        "Hanoi, Vietnam", "Ho Chi Minh City, Vietnam", "Guangzhou, China",
        "Dhaka, Bangladesh", "Phnom Penh, Cambodia", "Jakarta, Indonesia",
        "Yangon, Myanmar", "Bangkok, Thailand", "Manila, Philippines"
    ];
    const scales = [
        "80+ workers, 2,000 sqm workshop",
        "100+ workers, 2,500 sqm workshop",
        "60+ workers, 1,500 sqm workshop",
        "120+ workers, 3,000 sqm workshop"
    ];
    const capacities = ["~500 kg per month", "~600 kg per month", "~450 kg per month", "~700 kg per month"];

    // 随机选择位置、规模和产量
    const location = locations[Math.floor(Math.random() * locations.length)];
    const scale = scales[Math.floor(Math.random() * scales.length)];
    const monthlyCapacity = capacities[Math.floor(Math.random() * capacities.length)];

    // 复制基础详情并更新月产量
    const details = JSON.parse(JSON.stringify(baseFactoryDetails)); // 深拷贝
    const capacityItem = details.find(d => d.item.includes('月产量'));
    if (capacityItem) {
        capacityItem.desc = monthlyCapacity;
        capacityItem.desc_cn = monthlyCapacity.replace('kg per month', '公斤/月').replace('~', '约 ');
    }

    // 随机调整一些其他字段，使其略有不同
    if (index % 3 === 0) { // 每3个工厂调整一次发质颜色
        const colorItem = details.find(d => d.item.includes('发质颜色'));
        if (colorItem) {
            colorItem.desc = "Natural black, uniform";
            colorItem.desc_cn = "自然黑，颜色均匀";
        }
    }
    if (index % 5 === 0) { // 每5个工厂调整一次可漂染程度
        const bleachItem = details.find(d => d.item.includes('可漂染程度'));
        if (bleachItem) {
            bleachItem.desc = "Up to 27 Blonde";
            bleachItem.desc_cn = "可漂到 27 浅金色";
        }
    }

    return {
        id: id,
        location: location,
        established: `Since ${2010 + Math.floor(Math.random() * 10)}`, // 2010-2019之间
        scale: scale,
        details: details
    };
}

// 生成 34 家工厂的数据
for (let i = 1; i <= 34; i++) {
    FACTORIES_DATA.push(generateFactoryData(i));
}


// 动态生成工厂列表卡片
function renderFactoryList() {
    const factoryListContainer = document.getElementById('factory-list');
    if (!factoryListContainer) return;

    factoryListContainer.innerHTML = ''; // 清空现有内容

    FACTORIES_DATA.forEach(factory => {
        const factoryCard = document.createElement('a');
        factoryCard.href = `factory-detail.html?id=${encodeURIComponent(factory.id)}`; // 传递工厂 ID
        factoryCard.classList.add('factory-card');

        // 从 details 数组中找到月产量
        const monthlyCapacityItem = factory.details.find(d => d.item.includes('月产量'));
        const monthlyCapacityDisplay = monthlyCapacityItem ? monthlyCapacityItem.desc_cn : '信息缺失';

        factoryCard.innerHTML = `
            <div class="card-header">${factory.id}</div>
            <div class="card-body">
                <p><strong>所在地区:</strong> ${factory.location.split(', ')[1] ? factory.location.split(', ')[1].trim() : factory.location.split(', ')[0].trim()}</p>
                <p><strong>建厂时间:</strong> ${factory.established.replace('Since ', '自 ')}</p>
                <p><strong>工厂规模:</strong> ${factory.scale.replace('workers', '名工人').replace('sqm workshop', '平米车间')}</p>
                <p><strong>月产量:</strong> ${monthlyCapacityDisplay}</p>
            </div>
        `;
        factoryListContainer.appendChild(factoryCard);
    });
}

// 渲染工厂详情页
function renderFactoryDetail() {// ... (文件的其他部分，包括 FACTORIES_DATA 和 renderFactoryList 函数保持不变)



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

    // 确保 locationDisplay 逻辑正确，包含中文

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
}
