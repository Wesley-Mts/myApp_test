export class Tab3Page {



  bookingForm: FormGroup = this.fb.group({

    name: [''],

    email: [''],

    mobile: ['']

  });



  constructor(

    private aptService: ProductService,

    private router: Router,

    public fb: FormBuilder

  ) { }



  ngOnInit() {



  }



  formSubmit(): false | undefined {

    if (!this.bookingForm.valid) {

      return false;

    } else {

      this.aptService.createProduct(this.bookingForm.value).then((res: any) => {

        console.log(res)

        this.bookingForm.reset();

        this.router.navigate(['/home']);

      })

        .catch((error: any) => console.log(error));

    }

  }



}

