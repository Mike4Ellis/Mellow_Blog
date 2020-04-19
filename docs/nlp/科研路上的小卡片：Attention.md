---

title: 科研路上的小卡片：Attention机制

meta:
  - name: description
    content: 科研路上的小卡片：Attention机制
  - name: keywords
    content: Attention,Deep Learning

created: 2020/04/19

updated: 2020/04/19

tags:
  - Attention
  - Deep Learning

banner: /graffiti_2.jpg

password: false

discuss: false

copyright: Reprinting is allowed, the original link must be retained, and the copyright belongs to the blogger

---

## 科研路上的小卡片：Attention机制

在我为了毕设进行VQA领域的文献调研过程中，Attention机制可谓是一位常客，作为核心内容频频出现在论文中。

为了更好地理解MCAN模型中的深层协同注意力网络，我对Attention、Self-Attention等机制进行了调研总结。

虽然Attention机制早在九几年视觉图像领域便曾经提出过，在14年有团队在RNN模型上使用Attention机制对图像进行分类从而回到人们视线，后来也有团队使用类似attention的机制在机器翻译任务上将翻译和对齐同时进行，这也是Attention机制首次应用在NLP领域，接着attention机制被广泛应用在基于RNN/CNN等神经网络模型的各种NLP任务中。

2017年，google机器翻译团队发表的《Attention is all you need》中大量使用了自注意力（self-attention）机制来学习文本表示。自注意力机制也成为了大家近期的研究热点，并在各种NLP任务上进行探索。下图为attention研究进展的大概趋势。

![](https://images2018.cnblogs.com/blog/670089/201803/670089-20180324114521382-1901693540.png)

Attention机制的本质来自于人类视觉注意力机制。人们视觉在感知东西的时候一般不会是一个场景从到头看到尾每次全部都看，而往往是根据需求观察注意特定的一部分。而且当人们发现一个场景经常在某部分出现自己想观察的东西时，人们会进行学习在将来再出现类似场景时把注意力放到该部分上。

Attention函数的本质可以被描述为一个查询（query）到一系列（键key-值value）对的映射，如下图。

![](https://images2018.cnblogs.com/blog/670089/201803/670089-20180324114522044-1766547113.png)

在计算attention时主要分为三步，
1. 将query和每个key进行相似度计算得到权重，常用的相似度函数有点积，拼接，感知机等；
2. 一般是使用一个softmax函数对这些权重进行归一化；
3. 最后将权重和相应的键值value进行加权求和得到最后的attention。

目前在NLP研究中，key和value常常都是同一个，即key=value。

![](https://images2018.cnblogs.com/blog/670089/201803/670089-20180324114522327-1231729326.png)

### Scaled Dot-Product Attention

![](https://images2018.cnblogs.com/blog/670089/201803/670089-20180324114522943-718880007.png)

放缩点积Attention就是使用点积进行相似度计算的attention，然后多除了一个$\sqrt{d_k}$（为K的维度）起到调节作用，使得内积不至于太大。

在MCAN中即是除以$\sqrt{d}$。

### 多头Attention

多头attention（Multi-head attention）结构如下图，Query，Key，Value首先进行一个线性变换，然后输入到放缩点积attention，注意这里要做h次，其实也就是所谓的多头，每一次算一个头。而且每次Q，K，V进行线性变换的参数W是不一样的。然后将h次的放缩点积attention结果进行拼接，再进行一次线性变换得到的值作为多头attention的结果。可以看到，google提出来的多头attention的不同之处在于进行了h次计算而不仅仅算一次，论文中说到这样的好处是可以允许模型在不同的表示子空间里学习到相关的信息。

![](https://images2018.cnblogs.com/blog/670089/201803/670089-20180324114523172-204080606.png)

Self-attention即K=V=Q，例如输入一个句子，那么里面的每个词都要和该句子中的所有词进行attention计算。目的是学习句子内部的词依赖关系，捕获句子的内部结构。

文中K=V=Q并不意味着它们的线性变换矩阵W也相同，这只是意味着文本中每个词和该文本所有词自己计算attention。在做线性变换时，可能使用不同的初始化矩阵W会使模型有更强的表示能力。

在MCAN模型中，作者让$d_h = d/h$，使得拼接后的多头注意力矩阵依然是$d\times d$，防止模型过大。

### 参考来源

[自然语言处理中的自注意力机制（Self-attention Mechanism）](https://www.cnblogs.com/robert-dlut/p/8638283.html)