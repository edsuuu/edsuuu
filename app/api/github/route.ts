import { NextResponse } from 'next/server';

export async function GET() {
    try {
        return NextResponse.json({
            message: 'GitHub API Integration Scheme',
            status: 'pending configuration',
            endpoints: {
                get_user: 'GET /api/github?username=...',
                webhook_receiver: 'POST /api/github',
            }
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        return NextResponse.json({
            message: 'Webhook received successfully',
            payload_received: body
        });
    } catch (error) {
        return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }
}
