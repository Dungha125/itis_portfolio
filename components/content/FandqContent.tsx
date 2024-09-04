"use client"
import React from 'react'
import { Collapse } from "antd";
import { faqData } from '../src';
import 'antd/dist/reset.css';

const { Panel } = Collapse;

const FandqContent = () => {
  return (
    <div style={{ width: "90%", margin: "0 auto", padding: "20px" }}>
      <h1 className='w-full text-2xl lg:text-4xl font-bold text-center'>FAQ</h1>
      <Collapse accordion>
    {faqData.map((faq, index) => (
      <Panel header={faq.question} key={index}>
        {typeof faq.answer === 'string' ? (
          faq.answer.split('\n').map((paragraph: string, idx: number) => (
            <p key={idx}>{paragraph}</p>
          ))
        ) : (
          // Handle the case where faq.answer might be an array of strings
          Array.isArray(faq.answer) &&
          faq.answer.map((paragraph: string, idx: number) => (
            <p key={idx}>{paragraph}</p>
          ))
        )}
      </Panel>
    ))}
  </Collapse>
    </div>
  )
}

export default FandqContent
