import { Logger } from '@nestjs/common';
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
} from '@nestjs/websockets';

@WebSocketGateway(4001, { transport: ['websocket'] })
export class AppGateway {
  @WebSocketServer()
  wss;

  private logger = new Logger('AppGateway');

  @SubscribeMessage('client')
  onEvent(client, data: string): string {
    this.logger.log('New client connected' + client);
    return 'Successfully connected to server' + data;
  }
}
