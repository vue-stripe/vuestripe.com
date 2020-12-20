import axios from 'axios';
import { handleError } from './error-handler';

export const joinWaitList = async (opts) => {
  try {
    const from = window.location.href;
    const payload = {
      type: 'mrkdwn',
      text: 'From: ' + from + '\n Hi :smile: I would like to join *Vaxert*\'s wait list!\n ```' + opts.email + '```',
    };
    const { data } = await axios({
      method: 'post',
      url: `${process.env.SLACK_HOOK_WAIT_LIST}`,
      data: payload,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return data;
  } catch (e) {
    console.error(e);
    throw handleError(e);
  }
};
