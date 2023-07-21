export default async function handler(req: any, res: any) {
    const { orderId, paymentType, paymentKey, amount } = req.query;

    const secretKey = 'test_sk_zXLkKEypNArWmo50nX3lmeaxYG5R';

    const url = 'https://api.tosspayments.com/v1/payments/confirm';
    const basicToken = Buffer.from(`${secretKey}:`, 'utf-8').toString('base64');

    await fetch(url, {
        method: 'post',
        body: JSON.stringify({
            amount,
            orderId,
            paymentKey,
        }),
        headers: {
            Authorization: `Basic ${basicToken}`,
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());

    // // TODO: DB 처리
    res.redirect(`/payment/complete?orderId=${orderId}`);
}
