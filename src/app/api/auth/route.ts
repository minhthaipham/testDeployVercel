export async function POST(request: Request) {
  const res = await request.json();
  const accessToken = res.token;
  if (!accessToken) {
    return Response.json({ error: 'Invalid token' }, { status: 401 });
  }
  return Response.json(
    { res },
    {
      status: 200,
      headers: { 'Set-Cookie': `accessToken=${accessToken};Path=/` },
    }
  );
}
