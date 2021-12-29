import React from 'react';



const Password = () => {
	return (
		<div className="password">
			<div className="container contains p-3">
				<div className="row">
					<div className="content col-12 col-md-9">
						<h2 className="h4 mb-4">Changer de mot de passe</h2>

						<form action="" className="form-groups d-flex flex-column gap-4">
							<div>
								<input
									type="password"
									name="password1"
									id="password1"
									placeholder="Ancien mot de passe"
									className="form-control "
								/>
							</div>
							<div>
								<input
									type="password"
									name="password2"
									id="password2"
									placeholder="Nouveau mot de passe"
									className="form-control "
								/>
							</div>
							<div>
								<input
									type="password"
									name="confirm"
									id="confirm"
									placeholder="Confirmer nouveau mot de passe"
									className="form-control "
								/>
							</div>

							<div className="submit mb-5">
								<input type="submit" value="Valider" className="btn" />
							</div>
						</form>
					</div>
				</div>
			</div>

			
		</div>
	);
};

export default Password;
