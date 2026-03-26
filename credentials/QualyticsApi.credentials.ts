import type {
	Icon,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

// eslint-disable-next-line @n8n/community-nodes/credential-test-required
export class QualyticsApi implements ICredentialType {
	name = 'qualyticsApi';
	displayName = 'Qualytics API';
	documentationUrl = 'https://userguide.qualytics.io/integrations/n8n';
	icon: Icon = 'file:../icons/qualytics.svg';

	properties: INodeProperties[] = [
		{
			displayName: 'Webhook Secret',
			name: 'webhookSecret',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'Optional secret to validate incoming webhook requests from Qualytics. Must match the secret configured in your Qualytics n8n integration.',
		},
	];
}
