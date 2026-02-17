import { NextResponse } from 'next/server';

// Example: GET request to fetch data from GitHub
// Usage: curl http://localhost:3000/api/github
export async function GET() {
    try {
        // In a real scenario, you might fetch from GitHub API here
        // const response = await fetch('https://api.github.com/users/edsuuu');
        // const data = await response.json();

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

// Example: POST request to receive webhooks from GitHub
// Usage: curl -X POST http://localhost:3000/api/github -d '{"action": "push"}'
export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Process the webhook payload
        console.log('Received webhook payload:', body);

        return NextResponse.json({
            message: 'Webhook received successfully',
            payload_received: body
        });
    } catch (error) {
        return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }
}
