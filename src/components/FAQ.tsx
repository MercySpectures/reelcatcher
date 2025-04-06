import React from 'react';
import { Collapse } from 'antd';
import type { CollapseProps } from 'antd';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How do I download Instagram reels using Reel Catcher?",
      answer: "It's simple! Just copy the URL of the Instagram reel you want to download, paste it into our downloader, and click the download button. Your reel will be ready to download in seconds."
    },
    {
      question: "Is it free to use Reel Catcher?",
      answer: "Yes, Reel Catcher is completely free to use. There are no hidden fees or subscriptions required."
    },
    {
      question: "What is the quality of downloaded reels?",
      answer: "We always download reels in the highest available quality provided by Instagram. The exact quality may vary depending on the original upload quality."
    },
    {
      question: "Do I need to create an account to use Reel Catcher?",
      answer: "No, you don't need to create an account or register to use our service. Just paste the URL and download!"
    },
    {
      question: "Is it legal to download Instagram reels?",
      answer: "Downloading reels for personal use is generally acceptable. However, you should respect copyright laws and Instagram's terms of service. Always get permission before using someone else's content."
    },
    {
      question: "Why isn't my reel downloading?",
      answer: "This could be due to several reasons: the reel might be from a private account, the URL might be incorrect, or the content might have been removed. Make sure you're using a valid URL from a public account."
    },
    {
      question: "Do you store the downloaded reels?",
      answer: "No, we don't store any downloaded reels on our servers. Files are automatically deleted after you download them."
    },
    {
      question: "Can I download multiple reels at once?",
      answer: "Currently, we support downloading one reel at a time to ensure the best performance and quality for all users."
    },
    {
      question: "Which browsers are supported?",
      answer: "Reel Catcher works on all modern browsers including Chrome, Firefox, Safari, and Edge."
    },
    {
      question: "Is my information safe when using Reel Catcher?",
      answer: "Yes, we take privacy seriously. We don't collect any personal information beyond basic usage statistics, and we don't store downloaded content."
    }
  ];

  const items: CollapseProps['items'] = faqs.map((faq, index) => ({
    key: index,
    label: <span className="font-semibold">{faq.question}</span>,
    children: <p className="text-gray-700">{faq.answer}</p>,
    className: "text-base"
  }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <Collapse defaultActiveKey={['0']} items={items} className="bg-white shadow-sm rounded-lg" />
    </div>
  );
};

export default FAQ;
