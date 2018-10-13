import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway(4001)
export class AppGateway {
  @WebSocketServer()
  wss;
}
