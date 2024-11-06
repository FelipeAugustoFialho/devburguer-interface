import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    'pk_test_51QEXWwCmhFIovXI9MGBDIGspT0zvLq9fJlh8bS3M5KDWChfgPXC3owkQwDjjSj1Y9rvpN0Gkr6JDjUvC75FrD8C800BIIpch3S'
);

export default stripePromise;