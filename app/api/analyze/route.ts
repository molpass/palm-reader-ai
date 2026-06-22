import { NextRequest, NextResponse } from 'next/server';
import { InferenceClient } from '@huggingface/inference';

const hf = new InferenceClient(process.env.HUGGINGFACE_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { ipfsHash } = await request.json();

    if (!ipfsHash || typeof ipfsHash !== 'string') {
      return NextResponse.json({ error: '유효하지 않은 IPFS 해시입니다.' }, { status: 400 });
    }

    const prompt = buildPrompt();

    const result = await hf.chatCompletion({
      provider: 'hf-inference',
      model: 'meta-llama/Llama-3.1-8B-Instruct',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.6,
      top_p: 0.85,
      max_tokens: 300,
    });

    const message = result.choices?.[0]?.message?.content?.trim() || '유효한 응답을 생성하지 못했습니다. 다시 시도해 주세요.';
    // console.log('📜 생성된 리딩:', message);
    return NextResponse.json({ reading: message });
  } catch (error) {
    console.error('❌ chatCompletion 오류:', error);
    return NextResponse.json({ error: '리딩 생성 중 내부 오류가 발생했습니다.' }, { status: 500 });
  }
}

function buildPrompt(): string {
  return `당신은 신비로운 손금술사입니다. 어떤 사람이 자신의 손바닥 이미지를 올리고 운명에 대한 통찰을 구하고 있습니다.

손금의 핵심 영역인 사랑, 직업, 건강, 그리고 미래를 아우르는 독창적이고 통찰력 있는 손금 리딩을 한국어로 작성하세요. "다 잘될 거예요"나 "당신은 성공할 거예요" 같은 뻔한 표현은 피하고, 상상력 있고 구체적으로 작성하세요.

응답은 잘리거나 미완성된 문장 없이 완결되어야 합니다. 따뜻하고 공감 어린 어조를 사용하고, 마법 같은 분위기를 더하기 위해 이모지를 자유롭게 넣어도 좋습니다.

응답은 한국어 기준 350~450자 정도로 작성하고, 분명하고 희망적인 결론으로 마무리하세요. 모든 문장이 의미를 담아야 하며, 전체 리딩이 완결되고 만족스럽게 느껴져야 합니다.`;
}
