


export const actions = {
	contact: async ({request, locals}) => {
		
        let { page, user, pageSize } = Object.fromEntries(await request.formData());

        console.log('request: ', request)
	},

    candidature: async ({request, locals}) => {
		
        let { page, user, pageSize } = Object.fromEntries(await request.formData());

        console.log('request: ', request)
	}
};
